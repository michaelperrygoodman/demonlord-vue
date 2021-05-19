<template>
  <header id="global-header">
    <figure id="triangles" class="triangles" data-paroller-factor></figure>
    <nav>
      <div class="interior">
        <router-link to="/" class="logo"><img src="static/img/logo-hvlogo-blk.png" alt="Hyperlotus" /></router-link>
        <nav-menu />

      </div><!-- /interior -->
    </nav><!-- /nav -->

    <div class="header-content">
      <div class="interior">
        <h1 id="headline">Metallica is probably my favorite band.</h1>
      </div>
    </div><!-- /header-content -->
  </header> <!-- /header -->
</template>

<script>
  import navMenu from './NavMenu';
  import Delaunator from 'delaunator';

  export default {
    name: 'GlobalHeader',
    components: {
      'nav-menu': navMenu,
    },
    methods: {
      delaunay() {
        // delaunay triangles
        // delaunator@3.0.2 JS library

        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const len = 130;
        const randArr = Array.from({length: len}, () => new Array(getRandomInt(24, window.innerWidth), getRandomInt(24, window.innerWidth)));
        const points = randArr;
        //const points = [[338, 601], [357, 469], [200, 583], [424, 634], [302, 516], [265, 650], [459, 570], [367, 723], [453, 454], [220, 472], [326, 367], [424, 369], [393, 544], [121, 661], [180, 704], [126, 516], [87, 588], [523, 614], [472, 730], [277, 751], [585, 554], [532, 497], [351, 835], [450, 819], [511, 377], [586, 429], [251, 396], [164, 416], [224, 322], [299, 238], [404, 275], [470, 315], [121, 762], [2, 630], [21, 699], [186, 828], [40, 412], [28, 496], [572, 699], [646, 616], [566, 811], [275, 856], [622, 493], [720, 565], [382, 945], [257, 933], [475, 895], [554, 890], [512, 255], [627, 367], [570, 314], [712, 448], [126, 337], [122, 265], [212, 216], [397, 183], [326, 154], [35, 833], [117, 848], [145, 935], [58, 296], [652, 769], [653, 686], [770, 664], [628, 884], [697, 846], [816, 549], [454, 980], [586, 971], [670, 968], [508, 119], [573, 179], [697, 247], [755, 324], [625, 264], [783, 442], [73, 178], [142, 186], [188, 123], [408, 98], [318, 68], [21, 948], [9, 207], [782, 761], [717, 730], [854, 729], [894, 659], [741, 916], [815, 896], [884, 580], [856, 416], [898, 511], [804, 996], [599, 69], [472, 10], [665, 138], [821, 232], [775, 147], [884, 279], [98, 53], [17, 94], [208, 28], [381, 5], [91, 980], [836, 811], [918, 766], [974, 706], [900, 843], [962, 580], [939, 930], [874, 969], [970, 492], [958, 327], [938, 405], [567, 0], [700, 16], [910, 184], [863, 106], [956, 248], [780, 21], [890, 354], [987, 801], [979, 96], [742, 82], [917, 44], [853, 14], [986, 876], [986, 171], [980, 11]]; //const points = Array.apply(null, {length: 30}).map(Number.call, Number).map(x => [(x + 1) * 20, (x + 1) * 30])
        const delaunay = Delaunator.from(points);

        function nextHalfedge(e) { return (e % 3 === 2) ? e - 2 : e + 1; }
        function prevHalfedge(e) { return (e % 3 === 0) ? e + 2 : e - 1; }

        function edgesOfTriangle(t) { return [3 * t, 3 * t + 1, 3 * t + 2]; }

        function pointsOfTriangle(delaunay, t) {
          return edgesOfTriangle(t)
            .map(e => delaunay.triangles[e]);
        }

        function forEachTriangle(points, delaunay, callback) {
          for (let t = 0; t < delaunay.triangles.length / 3; t++) {
            callback(t, pointsOfTriangle(delaunay, t).map(p => points[p]));
          }
        }

        function forEachTriangleEdge(points, delaunay, callback) {
          for (let e = 0; e < delaunay.triangles.length; e++) {
            if (e > delaunay.halfedges[e]) {
              const p = points[delaunay.triangles[e]];
              const q = points[delaunay.triangles[nextHalfedge(e)]];
              callback(e, p, q);
            }
          }
        }

        function trianglesSvg(points, delaunay, fill = () => 'white') {
          const results = ['<g class="delaunay-draw">'];
          forEachTriangle(points, delaunay, (t, p) => {
            results.push(`<polygon data-id="${t}" points="${p}" fill="${fill(t)}"/>`);
          });
          results.push('</g>');
          return results.join('');
        }

        function delaunaySvg(points, delaunay) {
          const results = ['<g class="edges">'];
          forEachTriangleEdge(points, delaunay, (e, p, q) => {
            results.push(`<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" />`);
          });
          results.push('</g>');
          return results.join('');
        }

        function circumcenter(a, b, c) {
          const ad = a[0] * a[0] + a[1] * a[1];
          const bd = b[0] * b[0] + b[1] * b[1];
          const cd = c[0] * c[0] + c[1] * c[1];
          const D = 2 * (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]));
          return [
            1 / D * (ad * (b[1] - c[1]) + bd * (c[1] - a[1]) + cd * (a[1] - b[1])),
            1 / D * (ad * (c[0] - b[0]) + bd * (a[0] - c[0]) + cd * (b[0] - a[0])),
          ];
        }

        function triangleCenter(points, delaunay, t) {
          const vertices = pointsOfTriangle(delaunay, t).map(p => points[p]);
          return circumcenter(vertices[0], vertices[1], vertices[2]);
        }

        function forEachVoronoiEdge(points, delaunay, callback) {
          for (let e = 0; e < delaunay.triangles.length; e++) {
            if (e < delaunay.halfedges[e]) {
              const p = triangleCenter(points, delaunay, triangleOfEdge(e));
              const q = triangleCenter(points, delaunay, triangleOfEdge(delaunay.halfedges[e]));
              callback(e, p, q);
            }
          }
        }

        function voronoiSvg(points, delaunay) {
          const results = ['<g class="edges">'];
          for (let e = 0; e < delaunay.halfedges.length; e++) {
            if (e < delaunay.halfedges[e]) {
              const a = triangleCenter(points, delaunay, Math.floor(e / 3));
              const b = triangleCenter(points, delaunay, Math.floor(delaunay.halfedges[e] / 3));
              results.push(`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"/>`);
            }
          }
          results.push('</g>');
          return results.join('');
        }

        function resize() {
          let svgWidth;
          let svgHeight;

          svgWidth = window.innerWidth  / 1.66;
          svgHeight = window.innerHeight;

          document.querySelector('#triangles').innerHTML = `
          <svg viewBox="100 100 ${svgWidth} ${svgHeight}">
            ${voronoiSvg(points, delaunay)}
          </svg>`;
        }
        resize();
        window.onresize = resize;
      },
      newQuote() {
        const quotes = [
          'Placeholder text for a much better headline later'
        ];
        let quoteValue = quotes;
        let randomQuoteValue = quoteValue[Math.floor(Math.random() * quoteValue.length)];
        document.getElementById('headline').innerHTML = randomQuoteValue;
      },
    },
    watch:{
        $route (to, from){
          this.delaunay();
          this.newQuote();
        }
    },
    mounted() {
      this.delaunay();
      this.newQuote();
    }
  };
</script>
