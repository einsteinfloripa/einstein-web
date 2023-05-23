import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Einstein Floripa (Site)',

  projectId: '7jfw7fno',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },

  plugins: [deskTool()],
})
