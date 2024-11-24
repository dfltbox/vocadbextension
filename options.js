// Saves options to chrome.storage
//from https://developer.chrome.com/docs/extensions/develop/ui/options-page
const saveOptions = () => {
    const languages = document.getElementById('languages').value;
    const hidetag = document.getElementById('hidetag').checked;
  
    chrome.storage.sync.set(
      { language: languages, hidetag: hidetag },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Saved!';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
    chrome.storage.sync.get(
      { language: languages, hidetag: hidetag },
      (items) => {
        document.getElementById('languages').value = items.language;
        document.getElementById('hidetag').checked = items.hidetag;
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);