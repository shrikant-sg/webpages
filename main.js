import { enableMediaTracking } from '@snowplow/browser-plugin-media-tracking'

enableMediaTracking({
    id: 'example-id',
    options: {
      label: 'My Custom Video Label',
      captureEvents: ['play', 'pause', 'ended'],
      boundaries: [20, 80],
      volumeChangeTrackingInterval: 200,
    }
  })