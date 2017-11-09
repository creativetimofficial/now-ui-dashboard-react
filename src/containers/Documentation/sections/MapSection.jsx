import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const codeImport = `import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';`;

const codeExport = `export default GoogleApiWrapper({
    apiKey: "YOUR_KEY_HERE"
})(ComopnentName);`;

const codeExample = `<div className="map-container">
    <div id="map" style={{position: "relative", overflow: "hidden"}}>
        <Map
            style={{width: '100%', height: '100%', position: 'relative'}}
            google={this.props.google}
            initialCenter={{
              lat: 40.7484405,
              lng: -73.9856644
            }}
            zoom={13}
            clickableIcons={false}
            scrollwheel={false}
            styles={[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]}

        >
            <Marker onClick={this.onMarkerClick}
                name={'Current location'}
            />
        </Map>
    </div>
</div>`;

class MapSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Maps</h2>
                    <legend></legend>
                    <p>For maps we've used some components from a react library google-maps-react.</p>
                    <p>You can use it by simply importing the maps view in the page you want to render it:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <p>
                        For this component to work, you will need a google maps API key
                    </p>
                    <p>
                        Follow these steps to get an API key:
                    </p>
                    <ol>
                        <li>Go to the <a href="https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true" target="_blank" rel="noopener noreferrer">Google API Console</a>.</li>
                        <li>Create or select a project.</li>
                        <li>Click Continue to enable the API and any related services.</li>
                        <li>On the Credentials page, get an API key.</li>
                        <li>Note: If you have an existing unrestricted API key, or a key with browser restrictions, you may use that key.</li>
                        <li>From the dialog displaying the API key, select Restrict key to set a browser restriction on the API key.</li>
                        <li>In the Key restriction section, select HTTP referrers (web sites), then follow the on-screen instructions to set referrers.</li>
                        <li>(Optional) Enable billing. See <a href="https://developers.google.com/maps/documentation/javascript/usage" target="_blank" rel="noopener noreferrer">Usage Limits</a> for more information.</li>
                    </ol>
                    <p>
                        After these steps navigate in your project to <code>views/Maps/Maps.jsx</code> and replace the <code>YOUR_KEY_HERE</code> with the given API KEY.
                    </p>
                    <p>When you use this comopnent be sure on your export of your component to add the api key for google maps like so:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeExport}
                    </SyntaxHighlighter>
                    <h3>Example</h3>
                    <div className="map-container">
                        <div id="map" style={{position: "relative", overflow: "hidden"}}>
                            <Map
                                style={{width: '100%', height: '100%', position: 'relative'}}
                                google={this.props.google}
                                initialCenter={{
                                  lat: 40.7484405,
                                  lng: -73.9856644
                                }}
                                zoom={13}
                                clickableIcons={false}
                                scrollwheel={false}
                                styles={[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]}

                            >
                                <Marker onClick={this.onMarkerClick}
                                    name={'Current location'}
                                />
                            </Map>
                        </div>
                    </div>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExample}
                    </SyntaxHighlighter>
                    <h3>Props</h3>
                    <p>Please refer to <a href="https://github.com/fullstackreact/google-maps-react#quickstart" target="_blank" rel="noopener noreferrer">google-maps-react documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY"
})(MapSection);
