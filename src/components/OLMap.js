import React, { Component } from 'react'
import Title from './Title';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid'

import 'ol/ol.css';
import { Map, View } from 'ol'
import {fromLonLat} from 'ol/proj';
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';
import {
    Tile as TileLayer,
    Vector as VectorLayer
} from 'ol/layer'
import {
    Vector as VectorSource,
    OSM as OSM,
    XYZ as XYZSource,
    TileWMS as TileWMSSource
} from 'ol/source'
import { 
    ScaleLine, ZoomSlider,
    MousePosition, OverviewMap,
    defaults as DefaultControls
} from 'ol/control'

export default class OLMap extends Component {    
    componentDidMount() {
        const map = new Map({
        interactions: defaultInteractions().extend([
        new DragRotateAndZoom()
        ]),
        layers: [
        new TileLayer({
            source: new OSM()
        })
        ],
        target: 'map',
            // Add in the following map controls
        controls: DefaultControls().extend([
                new ZoomSlider(),
                new MousePosition(),
                new ScaleLine(),
                new OverviewMap()
        ]),
        view: new View({
            center: fromLonLat([35.518766, 32.789541]),
            zoom: 13
        })
      });
    }

    render() {
        return (
            <>
                <section className="services">
                    <Title title="איך למצוא אותנו?"/>
                    <h5>3 דקות מתחנת האוטובוס,
3 דקות מקו המים ...</h5>
                    <Grid container>
                        <Grid item xs={12}>
                            <div id='map' className="map" >
                            </div>
                        </Grid>
                    </Grid>

                    <h6>הוראות להגעה ברכב או בתחבורה ציבורית -</h6>
                    
                    <div>
                        <Link to="/tlv" className="btn-primary btns-map">מתל אביב</Link>
                        <Link to="/haifa" className="btn-primary btns-map">מחיפה</Link>
                        <Link to="/jerusalem" className="btn-primary btns-map">מירושלים</Link>
                        <Link to="/nazeret" className="btn-primary btns-map">מנצרת</Link>
                    </div >

                </section>
            </>
        );
    }
}