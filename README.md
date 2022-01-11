# Risksis Technology Limited

Renovating a website of a company I was interviewing at, but never got the job. http://www.risksis.com/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Favicon details
   - Font Family (Google Fonts): *Lexend Peta*, Font Variant: *Black 900 Normal* Font Size: *100*
   - https://favicon.io/favicon-generator/
### UI Framework
   - [Bootstrap 5 in vue](https://dev.to/tefoh/use-bootstrap-5-in-vue-correctly-2k2g)

### Icons
   - [Material Design Icons for Vue.js](https://github.com/therufa/mdi-vue)
   - Search for Icons [here](https://materialdesignicons.com/)

### SEO
   - Meta tags can only be added through the server side rendering
   - References:
       - https://vue-meta.nuxtjs.org/guide/metainfo.html
       - Check comments: https://www.digitalocean.com/community/tutorials/vuejs-vue-meta
       - https://github.com/nuxt/vue-meta/issues/533

### Components
   - https://codeburst.io/creating-reusable-components-with-vue-js-button-component-503167facfde

### Root path for imports
   -https://stackoverflow.com/a/52648570/8050183

### V-Wave
   - https://github.com/justintaddei/v-wave

### Menu JS
   - https://mmenujs.com/
   - Worth checking out

### 3D Plotting using Plotly
   - https://github.com/David-Desmaisons/vue-plotly
   - https://github.com/plotly/plotly.js

### How does ThreeJS compare?
   - It may still require a large amount of structure programming to set-up. E.g the Scatter plot here http://bl.ocks.org/phil-pedruco/9852362, as compared to the Plotly library https://plotly.com/javascript/3d-scatter-plots/. 
   - Through I think the ThreeJS allows a lot of customization of the scenes.

### Particles
   - https://www.npmjs.com/package/particles.vue
   - Based on TypeScript https://github.com/matteobruni/tsparticles

### Explore
   - https://acko.net/

### Weighted, directional graph
##### Original Data
   - https://snap.stanford.edu/data/soc-sign-bitcoin-otc.html
   - https://snap.stanford.edu/data/

##### Appending with names dataset from Google BigQuery
   - https://github.com/aakashkag/People-Name-List
   - https://cloud.google.com/bigquery/public-data/
   
   ``` sql
   SELECT commit, author.name as author_name, message, repo_name FROM bigquery-public-data.github_repos.commits LIMIT 36000
   ```
   - I couldn't save all the rows (limited to around 16000 to save to local), BigQuery Limitations

### MeshLambertMaterial
   - Due to the simplicity of the reflectance and illumination models, performance will be greater when using this material over the MeshPhongMaterial, MeshStandardMaterial or MeshPhysicalMaterial, at the cost of some graphical accuracy.

### 3D Force Graph
   - https://github.com/vasturiano/3d-force-graph

### Object GUI (Menu)
   - https://github.com/matteobruni/object-gui

