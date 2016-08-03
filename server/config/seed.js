/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Syllabus from '../api/syllabus/syllabus.model';

User.find({}).remove()
  .then(() => {
        User.create({
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

Syllabus.find({}).removeAsync()
    .then(() => {
        Syllabus.createAsync({
            _id: '5677bcec37407aa60754252b',
            academy: 'Zalaeta',
            year: 2004,
            title: 'Historia',
            education: '3º ESO',
            lecturer: 'Amparo',
            owner: '569e69cc1ab998358d37667d',
            objectives: 'Aprender historia',
            iconurl: 'http://www.fillmurray.com/200/200',
            weekplans: [{
                week: 1,
                sumary: 'Godos',
                topics: 'Visigodos, godos y se juntan todos',
                literature: 'Libro del profesor',
                videos: 'YouTube a saco',
                assignments: 'Trabajo cabrón',
                teaser: 'Sí'
            },
            {
                week: 2,
                sumary: 'Romanos',
                topics: 'Derecho y balanza',
                literature: 'Biblia',
                videos: 'Alternativos con Vimeo',
                assignments: 'Picar piedra',
                teaser: 'O no'
            }]
        })
    }).then(() => {
        console.log('finished populating syllabuses');
    });
