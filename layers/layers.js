ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([12.682168, 13.364905, 12.797828, 13.437826]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Commune_intervention_1 = new ol.format.GeoJSON();
var features_Commune_intervention_1 = format_Commune_intervention_1.readFeatures(json_Commune_intervention_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Commune_intervention_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_intervention_1.addFeatures(features_Commune_intervention_1);
var lyr_Commune_intervention_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_intervention_1, 
                style: style_Commune_intervention_1,
                popuplayertitle: 'Commune_intervention',
                interactive: true,
                title: '<img src="styles/legend/Commune_intervention_1.png" /> Commune_intervention'
            });
var format_IntrastructureAll_2 = new ol.format.GeoJSON();
var features_IntrastructureAll_2 = format_IntrastructureAll_2.readFeatures(json_IntrastructureAll_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IntrastructureAll_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntrastructureAll_2.addFeatures(features_IntrastructureAll_2);
cluster_IntrastructureAll_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IntrastructureAll_2
});
var lyr_IntrastructureAll_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IntrastructureAll_2, 
                style: style_IntrastructureAll_2,
                popuplayertitle: 'IntrastructureAll',
                interactive: true,
    title: 'IntrastructureAll<br />\
    <img src="styles/legend/IntrastructureAll_2_0.png" /> Amenagement des sites maraichers<br />\
    <img src="styles/legend/IntrastructureAll_2_1.png" /> Appui aux AGR collectives<br />\
    <img src="styles/legend/IntrastructureAll_2_2.png" /> Appui aux AGR individuelles<br />\
    <img src="styles/legend/IntrastructureAll_2_3.png" /> Appui aux producteurs maraichers<br />\
    <img src="styles/legend/IntrastructureAll_2_4.png" /> Construction de mur de cloture<br />\
    <img src="styles/legend/IntrastructureAll_2_5.png" /> Construction et équipement au CSI<br />\
    <img src="styles/legend/IntrastructureAll_2_6.png" /> Construction et équipement d\'école<br />\
    <img src="styles/legend/IntrastructureAll_2_7.png" /> Formation et équipement des auxiliaires para-vétérinaires<br />\
    <img src="styles/legend/IntrastructureAll_2_8.png" /> Réalisation d\'ouvrage d\'hydraulique<br />\
    <img src="styles/legend/IntrastructureAll_2_9.png" /> Réhabilitation CSI<br />\
    <img src="styles/legend/IntrastructureAll_2_10.png" /> Réhabilitation et équipement de classes<br />\
    <img src="styles/legend/IntrastructureAll_2_11.png" /> Transformation de la case de santé en CSI de type I<br />\
    <img src="styles/legend/IntrastructureAll_2_12.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Commune_intervention_1.setVisible(true);lyr_IntrastructureAll_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Commune_intervention_1,lyr_IntrastructureAll_2];
lyr_Commune_intervention_1.set('fieldAliases', {'NOM_COM': 'NOM_COM', 'adm_01': 'adm_01', 'adm_02': 'adm_02', 'adm_03': 'adm_03', });
lyr_IntrastructureAll_2.set('fieldAliases', {'Commune': 'Commune', 'Nom du vil': 'Nom du vil', 'Population': 'Population', 'Type d\'inf': 'Type d\'inf', 'Narratif': 'Narratif', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Bénéfici': 'Bénéfici', 'Type': 'Type', 'Villag': 'Villag', });
lyr_Commune_intervention_1.set('fieldImages', {'NOM_COM': 'TextEdit', 'adm_01': 'TextEdit', 'adm_02': 'TextEdit', 'adm_03': 'TextEdit', });
lyr_IntrastructureAll_2.set('fieldImages', {'Commune': 'TextEdit', 'Nom du vil': 'TextEdit', 'Population': 'TextEdit', 'Type d\'inf': 'TextEdit', 'Narratif': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Bénéfici': 'TextEdit', 'Type': 'TextEdit', 'Villag': 'TextEdit', });
lyr_Commune_intervention_1.set('fieldLabels', {'NOM_COM': 'inline label - always visible', 'adm_01': 'inline label - always visible', 'adm_02': 'inline label - always visible', 'adm_03': 'inline label - always visible', });
lyr_IntrastructureAll_2.set('fieldLabels', {'Commune': 'inline label - always visible', 'Nom du vil': 'inline label - always visible', 'Population': 'inline label - always visible', 'Type d\'inf': 'inline label - always visible', 'Narratif': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Bénéfici': 'inline label - visible with data', 'Type': 'inline label - always visible', 'Villag': 'hidden field', });
lyr_IntrastructureAll_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});