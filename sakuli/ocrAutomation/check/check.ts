(async () => {
    const testCase = new TestCase("ocr automation");
    try {
        await _navigateTo("http://consol.de")
        await _wait(1000);

        await _getRegionByText("OK,").click()
        await _getRegionByText("Cloud").click()
        await _highlight(_link("Nehmen Sie mit uns Kontakt auf"))
        await _getRegionByText("Nehmen Sie mit uns Kontakt auf").click()

        await _setValue(_textbox("powermail_field_firstname"), "Sören")
        await _setValue(_textbox("powermail_field_name"), "Sakuli")
        await _setValue(_emailbox("powermail_field_email"), "Sören.Sakuli@gmail.com")
        await _setValue(_textbox("powermail_field_company"), "ConSol GmbH")
        await _setValue(_textarea("powermail_field_message"),
            "Ich brauch da mal cloud!\nWen kann ich da mal sprechen, bitte?")
        await _check(_checkbox("powermail_field_datenschutz_1"))
        await _check(_checkbox("powermail_field_serviceangebote_1"))
        await _highlight(_submit("Senden"))
        await _getRegionByText("SENDEN").mouseMove()
        await _wait(200)

    } catch (e) {
        await testCase.handleException(e);
    } finally {
        await testCase.saveResult();
    }
})();