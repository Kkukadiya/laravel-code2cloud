<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Codes2cloud | Custom Software, Web, Mobile, Cloud &amp; AI Development Company</title>
    <meta name="description" content="Codes2cloud is a global software development company building custom web apps, mobile applications, cloud infrastructure, VOIP and AI automation for startups and enterprises in the USA, UK, UAE, Canada and Australia.">
    <meta name="keywords" content="software development company, custom software development, web development company, mobile app development, cloud solutions, AWS cloud consulting, DevOps services, VOIP solutions, AI automation services, AI and machine learning development, UI UX design agency, IT consulting services, React development, Node.js development, Laravel development, hire developers, offshore software development, enterprise software development, SaaS development company, digital transformation services" />
    <meta name="author" content="Codes2cloud" />
    
    <!-- Favicon Links -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="alternate icon" type="image/png" href="/favicon.png">
    <link rel="shortcut icon" href="/favicon.ico">
    
    <!-- Open Graph / Social Media Meta Tags -->
    <meta property="og:title" content="Codes2cloud | Custom Software, Web, Mobile, Cloud &amp; AI Development Company">
    <meta name="twitter:title" content="Codes2cloud | Custom Software, Web, Mobile, Cloud &amp; AI Development Company">
    <meta property="og:description" content="Global software development company building custom web, mobile, cloud, VOIP and AI automation solutions. Serving startups and enterprises in the USA, UK, UAE, Canada and Australia since 2009.">
    <meta name="twitter:description" content="Global software development company building custom web, mobile, cloud, VOIP and AI automation solutions. Serving startups and enterprises in the USA, UK, UAE, Canada and Australia since 2009.">

    @vite('resources/js/app.tsx')
</head>
<body>
    <div id="app"></div>
</body>
</html>
