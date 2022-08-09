/* eslint-disable no-console */
import * as React from 'react';
import { IRow, ICell } from '../components/Table';
import _ from 'lodash';

export const columns: (ICell | string)[] = [
  { title: 'Servers' },
  { title: 'Threads' },
  { title: 'Applications' },
  { title: 'Workspaces' },
  { title: 'Status' },
  { title: 'Location' },
  { title: 'Last Modified' },
  { title: 'URL' }
];

export const rows: IRow[] = [
  {
    cells: [
      'US-Node 1',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 2',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '5 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node2</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 3',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '20 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node3</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 4',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '10 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node4</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 5',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '15 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node5</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 6',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '4 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 7',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '10 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 8',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '8 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 9',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '1 hour ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 10',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 11',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '55 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 12',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '1 hour ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 13',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '20 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 14',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '4 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 15',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '10 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 16',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '5 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 17',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '5 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node17</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 18',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '10 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node18</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 19',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '30 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node19</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 20',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '3 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node20</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 21',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '15 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node21</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 22',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node22</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 23',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node23</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 24',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '40 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node24</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 25',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '1 hour ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node25</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'US-Node 26',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Raleigh', 'Boston', 'Atlanta', 'San Francisco']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/US-node26</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 1',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '7 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 2',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '50 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node2</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 3',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '10 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node3</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 4',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '3 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node4</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 5',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node5</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 6',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node6</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 7',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '25 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node7</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 8',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '1 hour ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node8</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 9',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '15 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node9</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 10',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '3 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node10</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 11',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '30 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node11</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 12',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '5 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node12</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 13',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '45 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node13</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 14',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node14</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Node 15',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '10 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-node15</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 1',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '20 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-Remote-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ--Remote-Node 2',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '15 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-Remote-node2</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 3',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-Remote-node3</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 4',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '1 hour ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-Remote-node4</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 5',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '30 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-Remote-node5</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 6',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-Remote-node6</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 7',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '45 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node7</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 8',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '6 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node8</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 9',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '50 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node9</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 10',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '3 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node10</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 11',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node11</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 12',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '20 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node12</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 13',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '5 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node13</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 14',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '30 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node14</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 15',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '1 hour ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node15</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 16',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '1 hour ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node16</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 17',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '25 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node17</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'CZ-Remote-Node 18',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '20 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/CZ-remote-node18</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 1',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '25 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node1</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 2',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node2</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 3',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '10 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node3</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 4',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '50 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node4</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 5',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '3 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node5</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 6',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node6</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 7',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '5 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node7</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 8',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '30 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node8</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 9',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '20 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node9</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 10',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '1 hour ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node10</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 11',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '40 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node11</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 12',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '1 hour ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node12</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 13',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '20 minutes ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node13</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 14',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '4 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node14</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 15',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '2 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node15</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  },
  {
    cells: [
      'Bangalore-Node 16',
      _.random(1, 20),
      _.random(1, 50),
      _.random(1, 30),
      _.sample(['Stopped', 'Running', 'Down', 'Needs Maintenance']),
      _.sample(['Brno', 'Prague']),
      '3 hours ago',
      {
        title: (
          <React.Fragment>
            <a href="#">http://www.redhat.com/en/office-locations/Bangalore-node16</a>
          </React.Fragment>
        ),
        props: { column: 'URL' }
      }
    ]
  }
];
