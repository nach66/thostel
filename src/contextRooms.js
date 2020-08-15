import React, { Component } from 'react'
//import items from './data';
import Client from './Contentful';
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minibar: false,
    tv: false
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "thostel",
//        order:"sys.createdAt"
        order:"fields.price"
      });
      let rooms = this.formatData(response.items);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      this.setState({
          rooms,
          sortedRooms: rooms,
          loading: false,
          price: maxPrice,
          maxPrice
        });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount () {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);    
        let room = { ...item.fields, images, id };
        return room;
      });
    return tempItems;
  };

    getRoom = slug => {
      let tempRooms = [...this.state.rooms];
      const room = tempRooms.find(room => room.slug === slug);
      return room;
    };

    handleChange = event => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = event.target.name;
  
      this.setState(
        {
          [name]: value
        },
        this.filterRooms
      );
    };

    filterRooms = () => {
      let {
        rooms,
        type,
        capacity,
        price,
        minibar,
        tv
      } = this.state;
      // all the rooms
      let tempRooms = [...rooms];
      // transform value
      capacity = parseInt(capacity);
      price = parseInt(price);

      // filter by type
      if (type !== "הכול") {
        tempRooms = tempRooms.filter(room => room.type === type);
      }
  
      // filter by capacity
      if (capacity !== 1) {
        tempRooms = tempRooms.filter(room => room.capacity >= capacity);
      }
      // filter by price
      tempRooms = tempRooms.filter(room => room.price <= price);
      // filter by minibar
      if (minibar) {
        tempRooms = tempRooms.filter(room => room.minibar === true);
      }
      // filter by tv
      if (tv) {
        tempRooms = tempRooms.filter(room => room.tv === true);
      }
      // change state
      this.setState({
        sortedRooms: tempRooms
      });
    };

    render() {
      return (
        <RoomContext.Provider 
          value={{
            ...this.state, 
            getRoom: this.getRoom,
            handleChange: this.handleChange
          }}
        >
          {this.props.children}                
        </RoomContext.Provider>                
      );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomConsumer, RoomProvider, RoomContext}