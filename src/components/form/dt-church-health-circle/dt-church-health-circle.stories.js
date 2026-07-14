import { html } from 'lit';
import { themes, themeCss, argTypes } from '../../../stories-theme.js';
import { FormDecorator, LocaleDecorator } from '../../../stories-utils.js';
import './dt-church-health-circle.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';

const ChurchHealthEmptyGroup = {
  ID: '1',
  post_title: 'Empty Group',
  post_type: 'groups',
  post_date: { timestamp: 1667920392, formatted: '2022-11-08' },
  coaches: [],
  members: [],
  leaders: [],
  parent_groups: [
    {
      ID: '19',
      post_type: 'groups',
      post_date_gmt: '2022-10-07 19:15:18',
      post_date: '2022-10-07 19:15:18',
      post_title: 'Christ Church',
      permalink: 'https://test.local/?p=19',
      status: {
        key: 'active',
        label: 'Active',
        color: '#4CAF50',
      },
    },
  ],
  peer_groups: [],
  child_groups: [],
  people_groups: [],
  meetings: [],
  contacts: [],
  prayer_request: [],
  group_status: {
    key: 'active',
    label: 'Active',
  },
  last_modified: {
    timestamp: 1669701376,
    formatted: '2022-11-29',
  },
  group_type: {
    key: 'pre-group',
    label: 'Pre-Group',
  },
  start_date: {
    timestamp: 1667920392,
    formatted: '2022-11-08',
  },
  assigned_to: {
    id: '1',
    type: 'user',
    display: 'micahmills',
    'assigned-to': 'user-1',
  },
  health_metrics: [],
  leader_count: 4,
  member_count: 2,
  permalink: 'https://test.local/groups/239',
  name: 'Home Church',
};

// Helper to build inline SVG data URIs for testing icon sizing/overflow.
// Each SVG intentionally uses a large viewBox with a distinct aspect ratio
// (wide, tall, square) so we can verify the icon is constrained to its
// square container instead of overflowing.
const svgDataUri = svg => `data:image/svg+xml,${encodeURIComponent(svg)}`;

const wideSvg = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
    <rect x="2" y="2" width="396" height="96" fill="#e57373" stroke="#000" stroke-width="4"/>
    <text x="200" y="65" font-size="48" text-anchor="middle" fill="#000">WIDE</text>
  </svg>`);

const tallSvg = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 400">
    <rect x="2" y="2" width="96" height="396" fill="#64b5f6" stroke="#000" stroke-width="4"/>
    <text x="50" y="205" font-size="34" text-anchor="middle" fill="#000" transform="rotate(90 50 200)">TALL</text>
  </svg>`);

const squareSvg = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <rect x="4" y="4" width="492" height="492" fill="#81c784" stroke="#000" stroke-width="8"/>
    <text x="250" y="285" font-size="90" text-anchor="middle" fill="#000">SQ</text>
  </svg>`);

const options = {
  church_baptism: {
    label: 'Baptism',
    description: 'The group is baptising.',
    icon: '/groups/baptism-2.svg',
  },
  church_bible: {
    label: 'Bible Study',
    description: 'The group is studying the bible.',
    icon: '/groups/word-2.svg',
  },
  church_communion: {
    label: 'Communion',
    description: 'The group is practicing communion.',
    icon: '/groups/communion-2.svg',
  },
  church_fellowship: {
    label: 'Fellowship',
    description: 'The group is fellowshiping.',
    icon: '/groups/heart-2.svg',
  },
  church_giving: {
    label: 'Giving',
    description: 'The group is giving.',
    icon: '/groups/giving-2.svg',
  },
  church_prayer: {
    label: 'Prayer',
    description: 'The group is praying.',
    icon: '/groups/prayer-2.svg',
  },
  church_praise: {
    label: 'Praise',
    description: 'The group is praising.',
    icon: '/groups/praise-2.svg',
  },
  church_sharing: {
    label: 'Sharing the Gospel',
    description: 'The group is sharing the gospel.',
    icon: '/groups/evangelism-2.svg',
  },
  church_leaders: {
    label: 'Leaders',
    description: 'The group has leaders.',
    icon: '/groups/leadership-2.svg',
  },
  custom_img: {
    label: 'Custom Image',
    description: 'The group has a custom image.',
    icon: '/dt-caret.png',
  },
  custom_icon: {
    label: 'Custom Icon',
    description: 'The group has a custom icon.',
    icon: null,
    'font-icon': 'mdi mdi-ab-testing',
  },
  church_commitment: {
    label: 'Church Commitment',
    description: 'The group has committed to be church.',
    icon: '/groups/covenant.svg',
  },
};

export default {
  title: 'Components/Form/Church Health Circle',
  component: 'dt-church-health-circle',
  argTypes: {
    name: { control: 'text' },
    options: { control: 'object' },
    value: { control: 'object' },
    width: { control: 'number' },
    missingIcon: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    saved: { control: 'boolean' },
    error: { control: 'text' },
    slot: { control: 'text' },
    onChange: { action: 'on-change' },
    ...argTypes,
  },
  args: {
    name: 'church-health',
    options,
    width: 300,
    value: [],
    missingIcon: '/groups/missing.svg',
    disabled: false,
    loading: false,
    saved: false,
    error: '',
    onChange: action('on-change'),
  },
  render: args => html`
      <div style="width: ${ifDefined(args.width)}px;">
        <dt-church-health-circle
          name="${ifDefined(args.name)}"
          .value="${args.value}"
          .options="${args.options}"
          missingIcon="${ifDefined(args.missingIcon)}"
          ?disabled=${args.disabled}
          ?readonly=${args.readonly}
          ?loading="${args.loading}"
          ?saved="${args.saved}"
          error="${ifDefined(args.error)}"
          @change=${args.onChange}
        >
          ${args.slot}
        </dt-church-health-circle>
      </div>
    `,
};

export const Empty = {};

export const MissingIcon = {
  args: {
    options: {
      ...options,
      extra: {
        label: 'Extra missing',
      },
    },
  },
};

export const Incomplete = {
  args: {
    value: ['church_bible', 'church_praise', 'church_prayer', 'church_giving'],
  },
};

export const Filled = {
  args: {
    value: Object.keys(options),
  },
};

// Reproduces the reported bug where SVG icons overflow their (square)
// container. Each SVG is much larger than the icon slot and has a
// different aspect ratio so we can see how width vs. height are constrained.
const overflowOptions = {
  church_baptism: {
    label: 'Baptism',
    description: 'The group is baptising.',
    icon: '/groups/baptism-2.svg',
  },
  church_bible: {
    label: 'Bible Study',
    description: 'The group is studying the bible.',
    icon: '/groups/word-2.svg',
  },
  church_communion: {
    label: 'Communion',
    description: 'The group is practicing communion.',
    icon: '/groups/communion-2.svg',
  },
  wide_icon: {
    label: 'Wide SVG',
    description: 'An oversized wide (400x100) SVG icon.',
    icon: wideSvg,
  },
  tall_icon: {
    label: 'Tall SVG',
    description: 'An oversized tall (100x400) SVG icon.',
    icon: tallSvg,
  },
  square_icon: {
    label: 'Square SVG',
    description: 'An oversized square (500x500) SVG icon.',
    icon: squareSvg,
  },
};

export const SvgIconSizes = {
  args: {
    options: overflowOptions,
    value: ['wide_icon', 'tall_icon', 'square_icon'],
  },
};

export const WidthMedium = {
  args: {
    width: 500,
    value: ['church_bible'],
  },
};
export const WidthLarge = {
  args: {
    width: 800,
    value: ['church_bible'],
  },
};

export const Disabled = {
  args: {
    value: ['church_bible'],
    disabled: true,
  },
};

export const ReadOnly = {
  args: {
    value: ['church_bible'],
    readonly: true,
  },
};

export const ReadOnlyDisabled = {
  args: {
    value: ['church_bible'],
    readonly: true,
    disabled: true,
  },
};

export const PrivateField = {
  args: {
    private: true,
    privateLabel: 'This is a private field',
    value: ['church_bible'],
  },
};

export const Loading = {
  args: {
    value: ['church_bible'],
    loading: true,
  },
};

export const Saved = {
  args: {
    value: ['church_bible'],
    saved: true,
  },
};
export const Error = {
  args: {
    error: 'Custom error message',
  },
};

export const ErrorSlot = {
  args: {
    slot: 'ErrorSlot',
    error: '[Should show link here]',
  },
};

export const BasicForm = {
  decorators: [FormDecorator],
  args: {
    value: ['church_bible'],
  },
};

export const Required = {
  decorators: [FormDecorator],
  args: {
    required: true,
  },
};

export const RequiredCustomMessage = {
  decorators: [FormDecorator],
  args: {
    required: true,
    requiredMessage: 'Custom required message',
  },
};
/*
export const ApiSettings = {
  args: {
    value: [
      'church_bible',
      'church_praise',
      'church_prayer',
      'church_giving',
    ],
    settings: null,
  },
}; */
/*
export const ApiGroup = {
  args: {
    groupId: 3,
    group: null,
  },
}; */
