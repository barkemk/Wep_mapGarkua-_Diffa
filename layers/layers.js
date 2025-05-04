ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32633").setExtent([51389.374795, 1377342.138234, 565845.890684, 1637637.854109]);
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
var format_CommunesdinterventionduProjet_1 = new ol.format.GeoJSON();
var features_CommunesdinterventionduProjet_1 = format_CommunesdinterventionduProjet_1.readFeatures(json_CommunesdinterventionduProjet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_CommunesdinterventionduProjet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesdinterventionduProjet_1.addFeatures(features_CommunesdinterventionduProjet_1);
var lyr_CommunesdinterventionduProjet_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunesdinterventionduProjet_1, 
                style: style_CommunesdinterventionduProjet_1,
                popuplayertitle: 'Communes d’intervention du Projet',
                interactive: false,
                title: '<img src="styles/legend/CommunesdinterventionduProjet_1.png" /> Communes d’intervention du Projet'
            });
var format_RalisationduPASPR_2 = new ol.format.GeoJSON();
var features_RalisationduPASPR_2 = format_RalisationduPASPR_2.readFeatures(json_RalisationduPASPR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_RalisationduPASPR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RalisationduPASPR_2.addFeatures(features_RalisationduPASPR_2);
cluster_RalisationduPASPR_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RalisationduPASPR_2
});
var lyr_RalisationduPASPR_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RalisationduPASPR_2, 
                style: style_RalisationduPASPR_2,
                popuplayertitle: 'Réalisation du PASPR',
                interactive: true,
    title: 'Réalisation du PASPR<br />\
    <img src="styles/legend/RalisationduPASPR_2_0.png" /> Amenagement des sites maraichers<br />\
    <img src="styles/legend/RalisationduPASPR_2_1.png" /> Appui aux AGR collectives<br />\
    <img src="styles/legend/RalisationduPASPR_2_2.png" /> Appui aux AGR individuelles<br />\
    <img src="styles/legend/RalisationduPASPR_2_3.png" /> Appui aux producteurs maraichers<br />\
    <img src="styles/legend/RalisationduPASPR_2_4.png" /> Formation et équipement des auxiliaires para-vétérinaires<br />\
    <img src="styles/legend/RalisationduPASPR_2_5.png" /> Construction de mur de cloture<br />\
    <img src="styles/legend/RalisationduPASPR_2_6.png" /> Construction et équipement au CSI<br />\
    <img src="styles/legend/RalisationduPASPR_2_7.png" /> Construction et équipement d\'école<br />\
    <img src="styles/legend/RalisationduPASPR_2_8.png" /> Réalisation d\'ouvrage d\'hydraulique<br />\
    <img src="styles/legend/RalisationduPASPR_2_9.png" /> Réhabilitation CSI<br />\
    <img src="styles/legend/RalisationduPASPR_2_10.png" /> Réhabilitation et équipement de classes<br />\
    <img src="styles/legend/RalisationduPASPR_2_11.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_CommunesdinterventionduProjet_1.setVisible(true);lyr_RalisationduPASPR_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CommunesdinterventionduProjet_1,lyr_RalisationduPASPR_2];
lyr_CommunesdinterventionduProjet_1.set('fieldAliases', {'NOM_COM': 'NOM_COM', 'adm_01': 'adm_01', 'adm_02': 'adm_02', 'adm_03': 'adm_03', });
lyr_RalisationduPASPR_2.set('fieldAliases', {'Commune': 'Commune', 'Nom_du_vil': 'Village', 'Population': 'Population', 'Type_d_inf': 'Activités', 'Narratif': 'Narratif', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Bénéfici': 'Nombre de bénéficiaires', 'Type': 'Types d’activités', 'Villag': 'Villag', 'Photo': 'Photo de l’activité', 'CodePhoto': 'CodePhoto', });
lyr_CommunesdinterventionduProjet_1.set('fieldImages', {'NOM_COM': 'TextEdit', 'adm_01': 'TextEdit', 'adm_02': 'TextEdit', 'adm_03': 'TextEdit', });
lyr_RalisationduPASPR_2.set('fieldImages', {'Commune': 'TextEdit', 'Nom_du_vil': 'TextEdit', 'Population': 'TextEdit', 'Type_d_inf': 'TextEdit', 'Narratif': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Bénéfici': 'TextEdit', 'Type': 'TextEdit', 'Villag': 'TextEdit', 'Photo': 'ExternalResource', 'CodePhoto': 'TextEdit', });
lyr_CommunesdinterventionduProjet_1.set('fieldLabels', {'NOM_COM': 'no label', 'adm_01': 'no label', 'adm_02': 'no label', 'adm_03': 'no label', });
lyr_RalisationduPASPR_2.set('fieldLabels', {'Commune': 'inline label - always visible', 'Nom_du_vil': 'inline label - always visible', 'Population': 'hidden field', 'Type_d_inf': 'inline label - always visible', 'Narratif': 'inline label - visible with data', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Bénéfici': 'inline label - always visible', 'Type': 'inline label - always visible', 'Villag': 'hidden field', 'Photo': 'inline label - always visible', 'CodePhoto': 'no label', });
lyr_RalisationduPASPR_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});