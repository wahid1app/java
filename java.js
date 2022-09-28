document.addEventListener(
  'load',
  (() => {
    console.log('hello from inside');
    const timeToUpdate = 6000;
    const date = new Date();
    const startHourBanner = 6;
    const endHourBanner = 10 + 12;
    const endMinutesBanner = 30;
    const elementToHideBanner = document.querySelector(
      '.salla-advertisement.hidden'
    );
    const hideElementBanner = () => {
      console.log('hello from inside Banner');
      if (date.getHours() >= startHourBanner) {
        elementToHideBanner.style.display = 'none';
      } else if (date.getHours() <= endHourBanner) {
        if (date.getHours() == endHourBanner) {
          if (date.getMinutes() >= endMinutesBanner) {
            elementToHideBanner.style.display = 'unset';
          }
        } else {
          elementToHideBanner.style.display = 'unset';
        }
      }
    };

    if (elementToHideBanner) {
      hideElementBanner();
    }
    const startHour1 = 4 + 12;
    const endHour1 = 10 + 12;
    const endMinutes1 = 30;
    const elementToHide1 = document.querySelector(
      '.list--shipping li:first-child'
    );
    const hideElement1 = () => {
      if (date.getHours() >= startHour1) {
        elementToHide1.style.display = 'none';
      } else if (date.getHours() <= endHour1) {
        if (date.getHours() == endHour1) {
          if (date.getMinutes() >= endMinutes1) {
            elementToHide1.style.display = 'unset';
          }
        } else {
          elementToHide1.style.display = 'unset';
        }
      }
    };
    if (elementToHide1) {
      hideElement1();
    }
    const startHour2 = 6 + 12;
    const endHour2 = 10 + 12;
    const endMinutes2 = 30;
    const elementToHide2 = document.querySelector(
      '.list--shipping li:nth-child(2)'
    );
    const hideElement2 = () => {
      if (date.getHours() >= startHour2) {
        elementToHide2.style.display = 'none';
      } else if (date.getHours() <= endHour2) {
        if (date.getHours() == endHour2) {
          if (date.getMinutes() >= endMinutes2) {
            elementToHide2.style.display = 'unset';
          }
        } else {
          elementToHide2.style.display = 'unset';
        }
      }
    };
    if (elementToHide2) {
      hideElement2();
    }
    const startHour3 = 8 + 12;
    const startMinutes3 = 30;
    const endHour3 = 10 + 12;
    const endMinutes3 = 31;
    const elementToHide3 = document.querySelector(
      '.list--shipping li:nth-child(3)'
    );
    const hideElement3 = () => {
      if (date.getHours() >= startHour3) {
        if (date.getHours() == startHour3) {
          if (date.getMinutes() >= startMinutes3) {
            elementToHide3.style.display = 'none';
          }
        } else {
          elementToHide3.style.display = 'none';
        }
      } else if (date.getHours() <= endHour3) {
        if (date.getHours() == endHour3) {
          if (date.getMinutes() >= endMinutes3) {
            elementToHide3.style.display = 'unset';
          }
        } else {
          elementToHide3.style.display = 'unset';
        }
      }
    };
    if (elementToHide3) {
      hideElement3();
    }
    const startHour4 = 10 + 12;
    const startMinutes4 = 30;
    const endHour4 = 4 + 12;
    const elementToHide4 = document.querySelector(
      '.list--shipping li:nth-child(4)'
    );
    const hideElement4 = () => {
      if (date.getHours() >= startHour4) {
        if (date.getHours() == startHour4) {
          if (date.getMinutes() >= startMinutes4) {
            elementToHide4.style.display = 'none';
          }
        } else {
          elementToHide4.style.display = 'none';
        }
      } else if (date.getHours() <= endHour4) {
        elementToHide4.style.display = 'unset';
      }
    };
    if (elementToHide4) {
      hideElement4();
    }

    window.setInterval(() => {
      if (elementToHideBanner) {
        hideElementBanner();
      }
      if (elementToHide1) {
        hideElement1();
      }
      if (elementToHide2) {
        hideElement2();
      }
      if (elementToHide3) {
        hideElement3();
      }
      if (elementToHide4) {
        hideElement4();
      }
      console.log('hello from setInterval');
    }, timeToUpdate);
  })()
);
console.log('hello from outside');
