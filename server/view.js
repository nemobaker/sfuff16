const renderFullPage = function(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <link rel="stylesheet" href="../client/app/styles/main.css" />
        <link href='https://fonts.googleapis.com/css?family=Marvel' rel='stylesheet' type='text/css'>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Unica+One' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Khand' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Nova+Mono' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Fjalla+One' rel='stylesheet' type='text/css'>
        <title>sf urban film fest</title>
        <script src="https://use.fontawesome.com/273e32a8e1.js"></script>
      </head>
      <body>
        <div id="app"><div>${html}</div></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/client/bundle.js"></script> 
      </body>
    </html>
  `;
};

export default renderFullPage;