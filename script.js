const but = document.querySelector('button');

but.addEventListener('click', function(ev) {
    const s = {
        url: 'https://wmporter.github.io/other-site',
        text: 'Hello there',
        title: 'Share My Site'
    };

    navigator.share(s);
})