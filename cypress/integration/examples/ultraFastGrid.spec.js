describe("AppTest", () => {

    it(`sony test`, function () {
        // Navigate to the url we want to test
        // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
        // but then change the above URL to https://demo.applitools.com/index_v2.html
        // (for the 2nd run)
        cy.visit('https://store.playstation.com/en-us/pages/latest');

        cy.scrollTo('bottom', { duration: 3000 });
        cy.scrollTo('top', { duration: 3000 });
        

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'sony App - Cypress',
            testName: 'sony Test - Cypress',
        })

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            tag: "home",
            target: 'window',
            fully: true
        });

        /*
            Adding this to eyesCheckWindow options fixes the issue:
            
            scriptHooks: {
                beforeCaptureScreenshot: `
                    let pageHeight = document.querySelector("body").scrollHeight;
                    let currTop = 0;
                    while (currTop < pageHeight) {
                        window.scrollBy({ 
                            top: currTop,
                            left: 0, 
                            behavior: 'smooth' 
                        });
                        currTop += 250;
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                `
            }
        */


        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});
