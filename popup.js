document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    //const boxValue = document.getElementById('sliderValue');
    const saveButton = document.getElementById('saveButton');

    // Retrieve the stored value from chrome.storage.local
    chrome.storage.local.get(['enabled'], (result) => {
        if (result.enabled !== undefined) {
            box.checked = result.enabled;
            // sliderValue.textContent = result.sliderValue;
        }
    });

    // Update the displayed value when the slider changes
    // slider.addEventListener('input', () => {
    //     sliderValue.textContent = slider.value;
    // });

    // Save the value to chrome.storage.local when the button is clicked
    saveButton.addEventListener('click', () => {
        const valueToSave = box.checked;
        chrome.storage.local.set({ enabled: valueToSave }, () => {
            console.log(`Value saved: ${valueToSave}`);
        });
    });
});