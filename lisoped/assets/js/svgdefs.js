(function (document) {
    var container = document.querySelector('#svgPlaceholder');

    if (container) {
    
				container.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\"><symbol id=\"icon-sertificate\" viewBox=\"0 0 24 16.7\"><path d=\"M23.9 14.2V1.4c0-.8-.6-1.4-1.4-1.4h-21C.7 0 .1.6.1 1.4v13.9c0 .8.6 1.4 1.4 1.4h21c.8 0 1.4-.6 1.4-1.4v-1.1c0 .1 0 .1 0 0zm-8.8-7.4l-.7-.8.7-.7c.1-.1.1-.2.1-.3V3.9h1.1c.1 0 .2 0 .3-.1l.8-.8.7.7c.1.1.2.1.3.1h1.1V5c0 .1 0 .2.1.3l.8.7-.7.7c-.1.1-.1.2-.1.3v1.1h-1.1c-.1 0-.2 0-.3.1l-.7.7-.7-.7c-.1-.1-.2-.1-.3-.1h-1.1v-1c-.2-.1-.2-.2-.3-.3zm-1.5-6l2.3 2.3h-1.1c-.2 0-.4.2-.4.4v1.1L10.6.8h3zM20 9c.2 0 .4-.2.4-.4V7.5l2.8 2.8v3L18.9 9H20zM22.5.8c.3 0 .6.3.6.6v7.8l-2.4-2.4.5-.5c.2-.2.2-.4 0-.6l-.9-.9V3.5c0-.2-.2-.4-.4-.4h-1.4l-.9-.9c-.2-.2-.4-.2-.6 0l-.5.5L14.6.8H22.5zm.6 14.5c0 .3-.3.6-.6.6h-21c-.3 0-.6-.3-.6-.6V1.4c0-.3.3-.6.6-.6h8L14 5.3l-.5.5c-.2.2-.2.4 0 .6l.9.9v1.4c0 .2.2.4.4.4h1.4l.9.9c.1.1.2.1.3.1s.2 0 .3-.1l.5-.5 5 5v.5l-.1.3z\"/><path d=\"M17.4 7.7c.9 0 1.6-.8 1.6-1.7s-.7-1.6-1.6-1.6-1.6.7-1.6 1.6c0 .9.7 1.7 1.6 1.7zm0-2.5c.5 0 .8.4.8.8 0 .5-.4.8-.8.8s-.8-.3-.8-.8c0-.4.3-.8.8-.8zM12.1 13H2.7c-.2 0-.4.2-.4.4s.2.4.4.4H12c.2 0 .4-.2.4-.4s-.1-.4-.3-.4zM2.7 11.8h6.5c.2 0 .4-.2.4-.4s-.2-.4-.4-.4H2.7c-.2 0-.4.2-.4.4s.2.4.4.4zM2.7 9.8H6c.2 0 .4-.2.4-.4S6.2 9 6 9H2.7c-.2 0-.4.2-.4.4s.2.4.4.4z\"/></symbol><symbol id=\"icon-dealer\" viewBox=\"0 0 80 80\"><path d=\"M79 14.4H46.3V1.2c0-.6-.4-1-1-1H34.7c-.6 0-1 .4-1 1v13.2H1c-.6 0-1 .4-1 1v63.8c0 .6.4 1 1 1h78c.6 0 1-.4 1-1V15.4c0-.5-.4-1-1-1zM34.7 26.1h10.5c.6 0 1-.4 1-1v-1.8h.8c1.7 0 3 1.3 3 3s-1.3 3-3 3H33c-1.7 0-3-1.3-3-3s1.3-3 3-3h.7v1.8c0 .5.5 1 1 1zm1-23.9h8.5v21.9h-8.5V2.2zm42.3 76H2V16.4h31.7v4.8H33c-2.8 0-5 2.2-5 5s2.2 5 5 5h14c2.8 0 5-2.2 5-5s-2.2-5-5-5h-.7v-4.8H78v61.8z\"/><path d=\"M40.9 37.8c-.3-.7-1.5-.7-1.8 0l-5 10L23 49.4c-.4.1-.7.3-.8.7-.1.4 0 .8.3 1l8 7.8-1.9 11c-.1.4.1.8.4 1s.7.3 1.1.1l9.9-5.2 9.9 5.2c.1.1.3.1.5.1s.4-.1.6-.2c.3-.2.5-.6.4-1l-1.9-11 8-7.8c.3-.3.4-.7.3-1-.1-.4-.4-.6-.8-.7l-11.1-1.6-5-10zm6.8 20.1c-.2.2-.3.6-.3.9l1.6 9.6-8.6-4.5c-.1-.1-.3-.1-.5-.1s-.3 0-.5.1L31 68.3l1.6-9.6c.1-.3-.1-.7-.3-.9L25.4 51l9.6-1.4c.3 0 .6-.3.8-.5l4.3-8.7 4.3 8.7c.1.3.4.5.8.5l9.6 1.4-7.1 6.9z\"/></symbol><symbol id=\"icon-delivery\" viewBox=\"0 0 90 59.1\"><path d=\"M38.8 4c-.3-.2-.6-.3-.9-.1-.3.1-.5.5-.5.8v3.5H24.7c-.2 0-.5.1-.6.3-.2.2-.3.4-.3.6V16c0 .5.4.9.9.9h12.7v3.5c0 .3.2.7.5.8.1.1.2.1.4.1s.4-.1.6-.2l9-7.9c.2-.2.3-.4.3-.7s-.1-.5-.3-.7L38.8 4zm.3 14.5V16c0-.2-.1-.5-.3-.6-.2-.2-.4-.3-.6-.3H25.5V10h12.7c.2 0 .5-.1.6-.3s.3-.4.3-.6V6.6l6.7 5.9-6.7 6zm-4.1-.1c-.2-.2-.4-.2-.6-.3H21.7v-3.5c0-.3-.2-.7-.5-.8s-.7-.1-.9.1l-9 7.9c-.2.2-.3.4-.3.7 0 .3.1.5.3.7l9 7.9c.2.1.4.2.6.2.5 0 .9-.4.9-.9v-3.6h12.7c.5 0 .9-.4.9-.9V19c-.1-.2-.2-.5-.4-.6zM20.8 25c-.2 0-.5.1-.6.3-.2.2-.3.4-.3.6v2.5l-6.7-5.9 6.7-5.9v2.5c0 .2.1.5.3.6.2.2.4.3.6.3h12.7v5.1L20.8 25zm56.4-5.8H64.1c-.5 0-.9.4-.9.9v13.4c0 .2.1.5.3.6.2.2.4.3.6.3h19.5c.3 0 .6-.2.7-.4.2-.3.2-.6.1-.8L78 19.7c-.2-.3-.5-.5-.8-.5zM64.9 32.5V20.9h11.7l5.5 11.6H64.9zm25-1.9l-8.1-16.3c-.1-.3-.5-.5-.8-.5H59V.9c0-.2-.1-.5-.3-.6-.1-.2-.4-.3-.6-.3H.9C.4 0 0 .4 0 .9V49.7c0 .5.4.9.9.9h8.5c.4 4.8 4.5 8.5 9.3 8.5 4.9 0 8.9-3.7 9.3-8.5h36.2c.4 4.8 4.5 8.5 9.3 8.5 2.5 0 4.9-1 6.6-2.7 1.6-1.6 2.5-3.6 2.7-5.7H89c.5 0 .9-.4.9-.9L90 31c0-.1 0-.2-.1-.4zM1.8 1.8h55.4v31.5H1.8V1.8zm16.9 55.6c-3.9 0-7.1-3-7.6-6.7h2.6v.6c0 .1 0 .1.1.2v.1c0 .1.1.1.1.2v.1s0 .1.1.1v.1s0 .1.1.1v.1s0 .1.1.1c0 0 0 .1.1.1 0 0 0 .1.1.1 0 0 0 .1.1.1 0 0 0 .1.1.1 0 0 0 .1.1.1l.1.1s0 .1.1.1l.1.1.1.1.2.2.1.1.1.1.1.1.1.1s.1 0 .1.1l.1.1s.1 0 .1.1c0 0 .1 0 .1.1 0 0 .1 0 .1.1 0 0 .1 0 .1.1 0 0 .1 0 .1.1 0 0 .1 0 .1.1 0 0 .1 0 .1.1 0 0 .1 0 .1.1h.1c.1 0 .1.1.2.1h.1s.1 0 .1.1H20.3c.1 0 .1 0 .2-.1h.1c.1 0 .1-.1.2-.1s.1-.1.2-.1h.1c.1 0 .1-.1.2-.1h.1s.1 0 .1-.1h.1l.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.2-.2.1-.1.1-.1.1-.1s0-.1.1-.1l.1-.1s0-.1.1-.1c0 0 0-.1.1-.1v-.1s0-.1.1-.1v-.1s0-.1.1-.1v-.1s0-.1.1-.2V52c0-.1.1-.1.1-.2s0-.1.1-.2V51h2.6c-.7 3.4-3.9 6.4-7.8 6.4zm-3.1-6.8h6.3v.2c0 .1 0 .1-.1.2v.1c0 .1-.1.1-.1.2v.1c0 .1-.1.1-.1.2-.1.1-.1.2-.2.2l-.1.1c0 .1-.1.1-.1.1l-.1.1-.1.1s-.1 0-.1.1c0 0-.1.1-.2.1 0 0-.1 0-.1.1-.1 0-.1.1-.2.1s-.2.1-.3.1H20c-.1 0-.1 0-.2.1H18.1c-.1 0-.1 0-.2-.1h-.1c-.1 0-.1 0-.2-.1h-.1c-.1 0-.2-.1-.3-.1-.1 0-.2-.1-.3-.2h-.1c-.1 0-.1-.1-.2-.1 0 0-.1 0-.1-.1-.1 0-.1-.1-.1-.1l-.1-.1c-.1-.1-.1-.1-.1-.2v-.1c-.1-.1-.1-.2-.2-.2-.1-.1-.1-.2-.1-.2v-.1c0-.1-.1-.1-.1-.2v-.1c0-.1 0-.1-.2-.2 0 .1 0 .1 0 0 0 .1 0 0 0 0zM79 55.2c-1.4 1.4-3.3 2.2-5.4 2.2-3.9 0-7.1-2.9-7.6-6.7h2.6V51.5c0 .1 0 .1.1.2 0 .1.1.1.1.2s.1.1.1.2v.1s0 .1.1.1v.1s0 .1.1.1v.1l.1.1s0 .1.1.1l.1.1.1.1.1.1.1.1.1.1.2.2.1.1.1.1.1.1.1.1.1.1s.1 0 .1.1l.1.1s.1 0 .1.1c0 0 .1 0 .1.1 0 0 .1 0 .1.1 0 0 .1 0 .1.1h.1s.1 0 .1.1h.1c.1 0 .1.1.2.1h.1c.1 0 .1 0 .2.1H74.9s.1 0 .1-.1h.1c.1 0 .1-.1.2-.1s.1-.1.2-.1h.1c.1 0 .1-.1.2-.1h.1s.1 0 .1-.1h.1l.1-.1s.1 0 .1-.1l.1-.1s.1 0 .1-.1l.1-.1.1-.1.1-.1.1-.1.1-.1.2-.2.1-.1.1-.1.1-.1s0-.1.1-.1l.1-.1s0-.1.1-.1c0 0 0-.1.1-.1 0 0 0-.1.1-.1 0 0 0-.1.1-.1v-.1s0-.1.1-.1v-.1s0-.1.1-.1v-.1c0-.1.1-.1.1-.2V51v-.1H81c-.1 1.4-.8 3-2 4.3zm-8.6-4.6h6.3v.1c0 .1 0 .1-.1.2v.1c0 .1-.1.1-.1.2v.1c0 .1-.1.2-.1.2-.1.1-.1.2-.2.2l-.1.1c0 .1-.1.1-.1.2l-.1.1-.1.1s-.1 0-.1.1c-.1 0-.1.1-.2.1 0 0-.1 0-.1.1-.1.1-.2.1-.2.1-.1 0-.2.1-.3.1h-.1c-.1 0-.1.1-.2.1H72.9c-.1 0-.1 0-.2-.1h-.1c-.1 0-.1 0-.2-.1h-.1c-.2-.1-.4-.2-.5-.3h-.1c-.1 0-.1-.1-.2-.1 0 0-.1 0-.1-.1-.1 0-.1-.1-.1-.1l-.1-.1c-.1-.1-.1-.1-.1-.2l-.1-.1c-.1-.1-.1-.2-.2-.2 0-.1-.1-.1-.1-.2v-.1c0-.1-.1-.1-.1-.2v-.1c0-.1 0-.1-.1-.2 0 .2 0 .1-.1 0 0 .1 0 .1 0 0zm17.8-1.7H1.8V35.1h56.3c.5 0 .9-.4.9-.9V15.6h21.4l7.8 15.7v17.6z\"/></symbol><symbol viewBox=\"0 0 24 24\" id=\"icon-facebook\"><path d=\"M22.7 0H1.3C.6 0 0 .6 0 1.3v21.4c0 .7.6 1.3 1.3 1.3h11.5v-9.3H9.7v-3.6h3.1V8.4c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.5.1 2.8.1V7h-1.9c-1.5 0-1.8.7-1.8 1.8v2.3h3.6l-.5 3.6h-3.1V24h6.1c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3z\"/></symbol><symbol id=\"icon-heart\" viewBox=\"0 0 72.1 66.8\"><path d=\"M18.8.238c-4.8 0-9.7 2-13.3 5.9-7.3 7.8-7.3 20.3 0 28.2l29.1 31.3c.8.8 2 .8 2.8.1l.1-.1 29.1-31.2c7.3-7.8 7.3-20.4 0-28.2s-19.3-7.8-26.6 0l-3.9 4.2-3.9-4.2c-3.7-4-8.6-6-13.4-6zm0 3.9c3.7 0 7.5 1.6 10.4 4.7l5.4 5.8c.8.8 2 .8 2.8.1l.1-.1 5.4-5.7c5.8-6.3 14.9-6.3 20.8 0s5.8 16.5 0 22.7l-27.6 29.7-27.7-29.8c-5.8-6.3-5.8-16.5 0-22.7 2.9-3.1 6.7-4.7 10.4-4.7z\"/></symbol><symbol id=\"icon-instagram\" viewBox=\"0 0 24 24\"><path d=\"M15.2 5.5H8.8c-2.2.1-3.2 1.1-3.3 3.3v6.4c.1 2.1 1.1 3.2 3.3 3.3h6.4c2.2-.1 3.2-1.1 3.3-3.3V12 8.8c-.1-2.2-1.1-3.2-3.3-3.3zM12 16.1c-2.3 0-4.1-1.8-4.1-4.1S9.7 7.9 12 7.9s4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1zm4.3-7.4c-.5 0-1-.4-1-1s.4-1 1-1c.5 0 1 .4 1 1s-.5 1-1 1zM14.7 12c0 1.5-1.2 2.7-2.7 2.7S9.3 13.5 9.3 12s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7zM19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm1 15.3c-.1 2.9-1.8 4.5-4.7 4.7H8.7c-2.9-.1-4.5-1.7-4.7-4.7V12 8.7C4.2 5.8 5.8 4.2 8.7 4h6.6c2.9.1 4.5 1.8 4.7 4.7v6.6z\"/></symbol><symbol id=\"icon-libra\"  viewBox=\"0 0 78.7 68.2\" style=\"enable-background:new 0 0 78.7 68.2;\" <style type=\"text/css\">.st0{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}</style>><line class=\"st0\" x1=\"39.5\" y1=\"58.9\" x2=\"39.5\" y2=\"1.6\"/><line class=\"st0\" x1=\"13.6\" y1=\"1.6\" x2=\"65.4\" y2=\"1.6\"/><polygon class=\"st0\" points=\"39.5,56.8 25.2,66.5 53.8,66.5 \"/><polygon class=\"st0\" points=\"13.6,10.2 2.5,34.8 24.7,34.8 \"/><path class=\"st0\" d=\"M1.2,35.3c6.6,6.8,17.6,6.8,24.8,0\"/><polygon class=\"st0\" points=\"65.3,10.2 54.2,34.8 76.4,34.8 \"/><path class=\"st0\" d=\"M52.9,35.3c6.6,6.8,17.7,6.8,24.8,0\"/></symbol><symbol id=\"icon-next\" viewBox=\"0 0 44 44\"><path d=\"M22 44C9.9 44 0 34.1 0 22S9.9 0 22 0s22 9.9 22 22-9.9 22-22 22zm0-42C11 2 2 11 2 22s9 20 20 20 20-9 20-20S33 2 22 2z\"/><path d=\"M19 31c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l7.3-7.3-7.3-7.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8 8c.4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3z\"/></symbol><symbol id=\"icon-office_goods\" viewBox=\"0 0 60 52\"><path d=\"M2.5 24h33.8l3.2-8H5.7l-3.2 8zM37 26H1c-.3 0-.6-.2-.8-.4-.2-.3-.2-.7-.1-1l4-10c.1-.4.5-.6.9-.6h36c.3 0 .6.2.8.4.2.3.2.6.1.9l-4 10c-.1.5-.5.7-.9.7zM47.7 26h9.9l-3.3-10h-9.9l3.3 10zM59 28H47c-.4 0-.8-.3-.9-.7l-4-12c-.1-.3-.1-.6.1-.9s.5-.4.8-.4h12c.4 0 .8.3.9.7l4 12c.1.3 0 .6-.1.9-.2.2-.5.4-.8.4z\"/><path d=\"M33 14h18V8H33v6zm19 2H32c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1zM9 14h14V8H9v6zm15 2H8c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1z\"/><path d=\"M6 50h34V20.2l-2.1 5.2c-.1.4-.5.6-.9.6H6v24zm35 2H5c-.6 0-1-.4-1-1V25c0-.6.4-1 1-1h31.3l3.7-9.4c.2-.4.7-.7 1.1-.6.5.1.8.5.8 1v36c.1.6-.3 1-.9 1z\"/><path d=\"M42 50h12V28h-7c-.4 0-.8-.3-.9-.7L42.3 16H42v34zm13 2H41c-.6 0-1-.4-1-1V15c0-.6.4-1 1-1h2c.4 0 .8.3.9.7L47.7 26H55c.6 0 1 .4 1 1v24c0 .6-.4 1-1 1zM39 8c-.6 0-1-.4-1-1V2H20v5c0 .6-.4 1-1 1s-1-.4-1-1V1c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1M14 44h18V34H14v10zm19 2H13c-.6 0-1-.4-1-1V33c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1z\"/><path d=\"M20 38h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1M28 42h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1M28 38h-4c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1M23 42h-5c-.6 0-1-.4-1-1s.4-1 1-1h5c.6 0 1 .4 1 1s-.4 1-1 1\"/></symbol><symbol id=\"icon-consultation\" viewBox=\"0 0 66 66\"><path class=\"ast0\" d=\"M35.2 39.7h-26c-.6 0-1-.4-1-1s.4-1 1-1h25.9c.6 0 1 .4 1 1 .1.6-.4 1-.9 1zM18.2 28.1c-4.8 0-9.1-4.5-9.1-9.6 0-4.9 4.1-9 9.1-9s9.1 4 9.1 9-4.3 9.6-9.1 9.6zm0-16.7c-3.9 0-7.1 3.1-7.1 7 0 4 3.4 7.6 7.1 7.6s7.1-3.6 7.1-7.6c0-3.8-3.2-7-7.1-7z\"/><path class=\"ast0\" d=\"M29.3 16.5C28.4 11.1 23.7 7 18.2 7S7.9 11.1 7.1 16.5l-2-.3C6.1 9.8 11.7 5 18.1 5c6.5 0 12.1 4.8 13 11.2l-1.8.3z\"/><path class=\"ast0\" d=\"M7.5 21H6.2c-1.5 0-2.7-1.2-2.7-2.7v-.2c0-1.5 1.2-2.7 2.7-2.7h1.3c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1zm-1.3-3.6c-.4 0-.7.3-.7.7v.2c0 .4.3.7.7.7h.3v-1.6h-.3zM30.1 21h-1.3c-.6 0-1-.4-1-1v-3.6c0-.6.4-1 1-1h1.3c1.5 0 2.7 1.2 2.7 2.7v.2c.1 1.5-1.1 2.7-2.7 2.7zm-.2-2h.3c.4 0 .7-.3.7-.7v-.2c0-.4-.3-.7-.7-.7h-.3V19z\"/><path class=\"ast0\" d=\"M23.9 26c-1.9 0-3.6-.7-4.9-2l1.4-1.5c2.1 2 4.7 1.4 5.7 1 1.9-.7 3.2-2.2 3.4-3.6l2 .2c-.2 2.2-2 4.3-4.6 5.3-1.2.4-2.1.6-3 .6zM30.2 39.7c-.6 0-1-.4-1-1v-.2c0-4.6-3.8-8.4-8.4-8.4h-5.3c-4.6 0-8.4 3.8-8.4 8.4v.2c0 .6-.4 1-1 1s-1-.4-1-1v-.2c0-5.7 4.7-10.4 10.4-10.4h5.3c5.7 0 10.4 4.7 10.4 10.4v.2c0 .5-.4 1-1 1z\"/><path class=\"ast0\" d=\"M18.9 25.1c-.2 0-.5-.1-.7-.3-.4-.4-.4-1-.1-1.4l1.5-1.7c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-1.5 1.7c-.2.3-.4.4-.7.4z\"/><g><path class=\"ast0\" d=\"M62.7 50.3H3.3C1.5 50.3 0 48.8 0 47V3.3C0 1.5 1.5 0 3.3 0h59.5C64.5 0 66 1.5 66 3.3V47c0 1.8-1.5 3.3-3.3 3.3zM3.3 2C2.6 2 2 2.6 2 3.3V47c0 .7.6 1.3 1.3 1.3h59.5c.7 0 1.3-.6 1.3-1.3V3.3C64 2.6 63.4 2 62.7 2H3.3z\"/><path class=\"ast0\" d=\"M65 39.7H1c-.6 0-1-.4-1-1s.4-1 1-1h64c.6 0 1 .4 1 1s-.4 1-1 1zM33 47.2c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm0-4.6c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3 1.3-.6 1.3-1.3c0-.7-.6-1.3-1.3-1.3zM43.8 59.1H22.2c-.3 0-.7-.2-.8-.5-.2-.3-.2-.7-.1-1l4.2-8.8c.2-.3.5-.6.9-.6h13.3c.4 0 .7.2.9.6l4.1 8.6c.1.2.2.4.2.6-.1.7-.5 1.1-1.1 1.1zm-20-2h18.5L39 50.3H27l-3.2 6.8z\"/><path class=\"ast0\" d=\"M47.8 66H18.3c-.6 0-1-.4-1-1v-6.9c0-.6.4-1 1-1h29.5c.6 0 1 .4 1 1V65c0 .6-.5 1-1 1zm-28.5-2h27.5v-4.9H19.3V64z\"/></g><g><path class=\"ast0\" d=\"M60.2 35.8H35.7c-.6 0-1-.4-1-1V5.3c0-.6.4-1 1-1h16.6c.3 0 .5.1.7.3l7.8 8.3c.2.2.3.4.3.7v21.2c.1.5-.3 1-.9 1zm-23.5-2h22.5V14l-7.3-7.7H36.7v27.5z\"/><path class=\"ast0\" d=\"M60.2 14.6h-7.9c-.6 0-1-.4-1-1V5.3c0-.4.3-.8.6-.9.4-.2.8-.1 1.1.2l7.8 8.2c.2.2.4.5.4.8 0 .6-.4 1-1 1zm-6.8-2h4.5l-4.5-4.8v4.8z\"/></g><g><path class=\"ast0\" d=\"M56.1 19.8H39.8c-.6 0-1-.4-1-1s.4-1 1-1h16.3c.6 0 1 .4 1 1 0 .5-.4 1-1 1z\"/></g><g><path class=\"ast0\" d=\"M56.1 25.4H39.8c-.6 0-1-.4-1-1s.4-1 1-1h16.3c.6 0 1 .4 1 1s-.4 1-1 1z\"/></g> <g><path class=\"ast0\" d=\"M56.1 31.1H39.8c-.6 0-1-.4-1-1s.4-1 1-1h16.3c.6 0 1 .4 1 1s-.4 1-1 1z\"/></g><g><path class=\"ast0\" d=\"M48.6 14.6h-8.8c-.6 0-1-.4-1-1V8.8c0-.6.4-1 1-1h8.8c.6 0 1 .4 1 1v4.8c0 .6-.5 1-1 1zm-7.8-2h6.8V9.8h-6.8v2.8z\"/></g></symbol><symbol id=\"icon-payment\" viewBox=\"0 0 30 20\"><path d=\"M2 .038c-1.1 0-2 .9-2 2v9.1c0 1.1.9 2 2 2h3v5.1c0 1.1.9 1.9 2 1.9h21c1.1 0 2-.9 2-1.9v-9.1c0-1.1-.9-2-2-2h-6v-5c0-1.1-.9-2-2-2 0-.1-18-.1-18-.1zm0 1h18c.5 0 1 .4 1 1v6H1v-6c0-.6.4-1 1-1zm1 1v1h11v-1H3zm12 0v1h2v-1h-2zm3 0v1h2v-1h-2zm-15 2v3h3v-3H3zm19 4h6c.5 0 1 .4 1 1v9.1c0 .5-.4.9-1 .9H7c-.5 0-1-.4-1-.9v-5.1h1v2.4c0 .2.1.4.3.5.8.3 1.4.9 1.6 1.7.1.2.3.3.5.3h16.2c.2 0 .4-.1.5-.3.3-.8.9-1.5 1.6-1.7.2-.1.3-.3.3-.5v-3.9c0-.2-.1-.4-.3-.5-.8-.3-1.4-.9-1.6-1.7-.1-.2-.3-.3-.5-.3H22v-1zm-21 2h20v1c0 .5-.4 1-1 1H2c-.5 0-1-.4-1-1v-1zm21 0h3.3c.4.8.9 1.4 1.7 1.8v3.4c-.8.4-1.3 1-1.7 1.8h-5s.1 0 .1-.1c1.4-1.2 1.9-3.2 1.3-4.9.2-.3.3-.6.3-1v-1zm-1.1 2.7c.3 1.2-.2 2.5-1.2 3.4-1.1 1-2.8 1.1-4.1.3-1.2-.7-1.9-2.1-1.7-3.5h6c.5.1.8 0 1-.2zm-12.9.3h5c-.2 1.5.4 3 1.6 4h-5c-.4-.8-.9-1.4-1.7-1.8.1 0 .1-2.2.1-2.2z\"/></symbol><symbol id=\"icon-search\" viewBox=\"0 0 61.8 61.7\"><path d=\"M61.3 58.4L45.9 42.9c8.8-10.2 8.3-25.6-1.4-35.3C39.4 2.5 32.8 0 26 0S12.8 2.5 7.6 7.6a25.953 25.953 0 0 0 0 36.8C12.8 49.5 19.3 52 26 52c6 0 12.1-2.1 16.9-6.3l15.4 15.4c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.7.9-1.9.2-2.7zM10.6 41.6C2 33 2 19.1 10.6 10.5c4.2-4.2 9.7-6.4 15.6-6.4s11.4 2.3 15.6 6.4c8.6 8.6 8.6 22.5 0 31.1-4.2 4.2-9.7 6.4-15.6 6.4s-11.5-2.3-15.6-6.4z\"/></symbol><symbol id=\"icon-twitter\" viewBox=\"0 0 24 24\"><path d=\"M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm-.1 9.2c.2 4.6-3.2 9.8-9.3 9.8-1.9 0-3.6-.5-5-1.5 1.7.2 3.5-.3 4.9-1.4-1.4 0-2.6-1-3.1-2.3.5.1 1 .1 1.5-.1-1.6-.3-2.7-1.7-2.6-3.3.3.4.8.6 1.3.6-1.5-1-1.9-2.9-1-4.4 1.6 2 4 3.3 6.8 3.4-.5-2.1 1.1-4 3.2-4 .9 0 1.8.4 2.4 1 .7-.1 1.5-.4 2.1-.8-.2.8-.8 1.4-1.4 1.8.7-.1 1.3-.3 1.9-.5-.5.7-1.1 1.3-1.7 1.7z\"/></symbol><symbol id=\"icon-user\" viewBox=\"0 0 87 86.4\"><path d=\"M73.3 56c-6-1.9-12.4-2.4-14.9-3.3-.4-.2-.7-.4-1-1-.3-.5-.5-1.3-.6-2.3 1.6-1.7 3.1-3.6 4.3-5.7 3.8-6.5 5.6-14.3 5.6-20.5C66.6 10.4 56.3 0 43.5 0 30.8 0 20.4 10.4 20.4 23.1c0 6.2 1.8 14 5.6 20.5 1.2 2 2.5 3.9 4.1 5.5-.1 1.1-.3 2-.6 2.5-.3.7-.6.9-.9 1-2.6 1-8.9 1.5-14.9 3.3-6 1.9-12 5.5-13.6 12.9-.1.5.1 1.1.5 1.4 23.7 21.4 62.3 21.4 86 0 .4-.4.6-.9.5-1.4-1.7-7.3-7.8-11-13.8-12.8zM28.6 42.1c-3.4-5.9-5.2-13.4-5.2-19C23.4 12 32.4 3 43.5 3s20.1 9 20.1 20.1c0 5.6-1.7 13.1-5.2 19S50 52.2 43.5 52.2c-6.6 0-11.5-4.2-14.9-10.1zM3.2 68.7c1.6-5.6 6.1-8.2 11.4-9.9 5.5-1.7 11.5-2 15.1-3.4 1.2-.5 2-1.5 2.5-2.6.2-.4.4-.9.5-1.4 3 2.3 6.7 3.8 10.8 3.8s7.7-1.4 10.7-3.7c.1.5.3 1 .6 1.4.6 1.1 1.5 2 2.7 2.5 3.6 1.4 9.5 1.7 15.1 3.4 5.3 1.7 9.8 4.3 11.4 9.9-22.5 19.5-58.5 19.5-80.8 0z\"/></symbol><symbol id=\"icon-youtube\" viewBox=\"0 0 24 18\"> <path d=\"M19.6.2C16-.1 8-.1 4.4.2.5.5 0 2.8 0 9c0 6.2.5 8.5 4.4 8.8 3.6.2 11.6.2 15.2 0 3.9-.2 4.4-2.6 4.4-8.8 0-6.2-.5-8.5-4.4-8.8zM9 13V5l8 4-8 4z\"/></symbol></svg>";

    } else {
        throw new Error('svginjector: Could not find element: #svgPlaceholder');
    }

})(document);
