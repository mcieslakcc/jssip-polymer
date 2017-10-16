class Storage {
    saveProfile(profile) {
        localStorage.setItem('profile', JSON.stringify(profile));
    }

    getProfile() {
        const profile = localStorage.getItem('profile')
        return profile ? JSON.parse(profile) : {};
    }

    clearProfile() {
        localStorage.removeItem('profile')
    }    
}

if (!('libs' in window)) {
    window.libs = {};
}
window.libs.storage = new Storage();