/*
 * Copyright (C) 2011 Deny Prasetyo <jasoet87@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ext.Loader.setConfig({enabled: true});

Ext.require([
    'Ext.app.*',
    'Ext.container.*'
]);
Ext.create('Ext.app.Application', {
    name: 'AM',

    controllers: [
        'Users'
    ],

    views: [
        'user.List'
    ],

    launch: function() {
        Ext.create('AM.view.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'josslist'
            }
        });
    }
});