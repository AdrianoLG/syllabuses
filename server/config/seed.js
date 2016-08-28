/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Syllabus from '../api/syllabus/syllabus.model';

User.find({}).remove()
    .then(() => {
        User.createAsync({
            _id: '569e69cc1ab998358d37667e',
            provider: 'local',
            name: 'Test User',
            email: 'test@example.com',
            password: 'test'
        }, {
            _id: '569e69cc1ab998358d37667d',
            provider: 'local',
            role: 'admin',
            name: 'Admin',
            email: 'admin@example.com',
            password: 'admin'
        })
    .then(() => {
        console.log('finished populating users');
    });
  });

Syllabus.find({}).remove()
    .then(() => {
        Syllabus.createAsync({
            _id: '569e69cc1ab998358d37667c',
            academy: 'Zalaeta',
            year: 2004,
            title: 'Historia',
            education: '3º ESO',
            lecturer: 'Amparo',
            objectives: '<ul><li>Objetivo 1</li><li>Objetivo 2</li><li>Objetivo 3</li></ul>',
            iconurl: 'http://www.fillmurray.com/200/200',
            owner: '569e69cc1ab998358d37667d',
            weekplans: [{
                week: 1,
                sumary: 'Godos',
                topics: 'Visigodos, godos y se juntan todos',
                literature: 'Libro del profesor',
                videos: 'YouTube a saco',
                assignments: 'Trabajo cabrón',
                teaser: 'Sí'
            }, {
                week: 2,
                sumary: 'Romanos',
                topics: 'Derecho y balanza',
                literature: 'Cicerón',
                videos: 'Alternativos con Vimeo',
                assignments: 'Picar piedra',
                teaser: 'O no'
            }]
        }, {
            _id: '569e69cc1ab998358d37667b',
            academy: 'Dominicos',
            year: 2002,
            title: 'Geografía',
            education: '1º ESO',
            lecturer: 'Padre Domingo',
            objectives: '<ul><li>Objetivo 4</li><li>Objetivo 5</li><li>Objetivo 6</li></ul>',
            iconurl: 'http://www.placekitten.com/200/200',
            owner: '569e69cc1ab998358d37667d',
            weekplans: [{
                week: 1,
                sumary: 'Bonn',
                topics: 'Visión soviética',
                literature: 'Fotocopias',
                videos: 'VHS',
                assignments: 'Jamón de jabugo',
                teaser: 'Sí'
            }, {
                week: 2,
                sumary: 'Ríos',
                topics: 'Esla, Eresma, Tormes',
                literature: 'Biblia',
                videos: '-',
                assignments: '3 avemarías',
                teaser: 'Nunca'
            }]
        })
    .then(() => {
        console.log('finished populating users');
    });
});
