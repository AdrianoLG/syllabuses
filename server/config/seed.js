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
