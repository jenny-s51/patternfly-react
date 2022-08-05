/* eslint-disable no-console */
import React from 'react';
import { ICell, IRow } from '../components/Table';

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
      '18',
      '30',
      '4',
      'Stopped',
      'Boston',
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
      '2',
      '25',
      '20',
      'Down',
      'Atlanta',
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
      '20',
      '45',
      '29',
      'Running',
      'San Francisco',
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
      '7',
      '14',
      '30',
      'Needs Maintainence',
      'Raleigh',
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
      '17',
      '23',
      '22',
      'Down',
      'Atlanta',
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
      '10',
      '8',
      '4',
      'Needs Maintenance',
      'San Francisco',
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
      '11',
      '22',
      '30',
      'Running',
      'Boston',
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
      '4',
      '2',
      '20',
      'Running',
      'San Francisco',
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
      '18',
      '50',
      '7',
      'Down',
      'Raleigh',
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
      '10',
      '12',
      '3',
      'Running',
      'Boston',
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
      '11',
      '44',
      '9',
      'Running',
      'Boston',
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
      '15',
      '11',
      '30',
      'Running',
      'Raleigh',
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
      '3',
      '6',
      '20',
      'Running',
      'Raleigh',
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
      '13',
      '29',
      '27',
      'Stopped',
      'San Francisco',
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
      '11',
      '12',
      '4',
      'Stopped',
      'Raleigh',
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
      '14',
      '2',
      '29',
      'Stopped',
      'Atlanta',
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
      '2',
      '47',
      '30',
      'Stopped',
      'Raleigh',
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
      '14',
      '13',
      '3',
      'Running',
      'San Francisco',
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
      '19',
      '25',
      '22',
      'Down',
      'Raleigh',
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
      '10',
      '27',
      '11',
      'Down',
      'Raleigh',
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
      '8',
      '17',
      '26',
      'Running',
      'Raleigh',
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
      '18',
      '6',
      '2',
      'Stopped',
      'Boston',
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
      '11',
      '28',
      '18',
      'Needs Maintenance',
      'Raleigh',
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
      '5',
      '23',
      '1',
      'Stopped',
      'Raleigh',
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
      '18',
      '7',
      '14',
      'Needs Maintenance',
      'San Francisco',
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
      '1',
      '40',
      '16',
      'Needs Maintenance',
      'San Francisco',
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
      '16',
      '48',
      '5',
      'Running',
      'Brno',
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
      '5',
      '42',
      '1',
      'Needs Maintainence',
      'Prague',
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
  }
];
