chrome.storage.local.get(['background', 'position'], result => result.background ? document.body.style = `background-position:${result.position};background-image:${result.background}` : document.body.id = 'options')
document.querySelector('#newBackground').addEventListener('change', e => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.addEventListener('load', data => chrome.storage.local.set({ background: `url(${data.target.result})`, position: prompt('Specify background position:', 'bottom center') }, () => window.location.reload()))
})