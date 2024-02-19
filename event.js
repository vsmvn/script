'use strict';
(function() {
  /**
   * @return {undefined}
   */
  var render = function() {
    if (typeof window.LadiPageScript == "undefined" || window.LadiPageScript == undefined || typeof window.ladi == "undefined" || window.ladi == undefined) {
      setTimeout(render, 100);
      return;
    }
    window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2;
    /** @type {string} */
    window.LadiPageScript.runtime.publish_platform = "LADIPAGEDNS";
    /** @type {boolean} */
    window.LadiPageScript.runtime.isMobileOnly = false;
    /** @type {!Array} */
    window.LadiPageScript.runtime.DOMAIN_SET_COOKIE = [];
    /** @type {!Array} */
    window.LadiPageScript.runtime.DOMAIN_FREE = [];
    /** @type {number} */
    window.LadiPageScript.runtime.bodyFontSize = 12;
    /** @type {number} */
    window.LadiPageScript.runtime.time_zone = 7;
    /** @type {string} */
    window.LadiPageScript.runtime.currency = "VND";
    /** @type {boolean} */
    window.LadiPageScript.runtime.convert_replace_str = true;
    /** @type {number} */
    window.LadiPageScript.runtime.tracking_global_delay = 0;
    /** @type {string} */
    window.LadiPageScript.runtime.eventData = "%7B%22SECTION_POPUP%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22solid%22%2C%22mobile.option.background-style%22%3A%22solid%22%7D%2C%22POPUP540%22%3A%7B%22type%22%3A%22popup%22%2C%22option.conversion_name%22%3A%22M%E1%BB%9F%20%C4%91%C4%83ng%20k%C3%BD%22%2C%22desktop.option.popup_position%22%3A%22default%22%2C%22desktop.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%2C%22mobile.option.popup_position%22%3A%22default%22%2C%22mobile.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%7D%2C%22BUTTON_TEXT542%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON542%22%3A%7B%22type%22%3A%22button%22%2C%22option.is_submit_form%22%3Afalse%2C%22option.is_buy_now%22%3Afalse%2C%22option.data_setting.type_dataset%22%3A%22COLLECTION%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%2C%22desktop.style.animation-name%22%3A%22pulse%22%2C%22desktop.style.animation-delay%22%3A%220s%22%2C%22mobile.style.animation-name%22%3A%22pulse%22%2C%22mobile.style.animation-delay%22%3A%220s%22%7D%2C%22FORM_ITEM544%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22text%22%2C%22option.input_tabindex%22%3A1%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM545%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22email%22%2C%22option.input_tabindex%22%3A2%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM546%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22tel%22%2C%22option.input_tabindex%22%3A3%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM547%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22textarea%22%2C%22option.input_tabindex%22%3A8%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM548%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22select%22%2C%22option.input_tabindex%22%3A4%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM549%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22checkbox%22%2C%22option.input_tabindex%22%3A5%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM550%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22checkbox%22%2C%22option.input_tabindex%22%3A6%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM551%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22text%22%2C%22option.input_tabindex%22%3A7%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM541%22%3A%7B%22type%22%3A%22form%22%2C%22option.form_config_id%22%3A%225f8947cdcf7c1706e949fd8a%22%2C%22option.form_send_ladipage%22%3Afalse%2C%22option.thankyou_type%22%3A%22default%22%2C%22option.thankyou_value%22%3A%22C%E1%BA%A3m%20%C6%A1n%20b%E1%BA%A1n%20%C4%91%C3%A3%20quan%20t%C3%A2m!%22%2C%22option.form_conversion_name%22%3A%22Lead%22%2C%22option.form_google_ads_conversion%22%3A%22UA-161840848-4%22%2C%22option.form_auto_funnel%22%3Atrue%2C%22option.form_captcha%22%3Atrue%2C%22option.form_auto_complete%22%3Atrue%2C%22option.is_form_coupon%22%3Afalse%2C%22option.is_form_login%22%3Afalse%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE552%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22SECTION919%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22image%22%2C%22mobile.option.background-style%22%3A%22image%22%7D%2C%22SECTION1134%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22image%22%2C%22mobile.option.background-style%22%3A%22image%22%7D%2C%22SECTION1135%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22solid%22%2C%22mobile.option.background-style%22%3A%22solid%22%7D%2C%22HEADLINE1136%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1137%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE1143%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%2C%22desktop.style.animation-name%22%3A%22fadeInUp%22%2C%22desktop.style.animation-delay%22%3A%220.2s%22%2C%22mobile.style.animation-name%22%3A%22fadeInUp%22%2C%22mobile.style.animation-delay%22%3A%220.2s%22%7D%2C%22SECTION1160%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22image%22%2C%22mobile.option.background-style%22%3A%22image%22%7D%2C%22SECTION1161%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22solid%22%2C%22mobile.option.background-style%22%3A%22solid%22%7D%2C%22HEADLINE1163%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH1165%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH1182%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON_TEXT1183%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON1183%22%3A%7B%22type%22%3A%22button%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22popup%22%2C%22action%22%3A%22POPUP1582%22%7D%2C%22option.is_submit_form%22%3Afalse%2C%22option.is_buy_now%22%3Afalse%2C%22option.data_setting.type_dataset%22%3A%22COLLECTION%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%2C%22desktop.style.animation-name%22%3A%22pulse%22%2C%22desktop.style.animation-delay%22%3A%221s%22%2C%22mobile.style.animation-name%22%3A%22pulse%22%2C%22mobile.style.animation-delay%22%3A%221s%22%7D%2C%22HEADLINE1188%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON_TEXT1197%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON1197%22%3A%7B%22type%22%3A%22button%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22popup%22%2C%22action%22%3A%22POPUP1582%22%7D%2C%22option.is_submit_form%22%3Afalse%2C%22option.is_buy_now%22%3Afalse%2C%22option.data_setting.type_dataset%22%3A%22COLLECTION%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%2C%22desktop.style.animation-name%22%3A%22pulse%22%2C%22desktop.style.animation-delay%22%3A%221s%22%2C%22mobile.style.animation-name%22%3A%22pulse%22%2C%22mobile.style.animation-delay%22%3A%221s%22%7D%2C%22HEADLINE1201%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1202%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH1208%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22GROUP1570%22%3A%7B%22type%22%3A%22group%22%2C%22desktop.style.animation-name%22%3A%22fadeInUp%22%2C%22desktop.style.animation-delay%22%3A%220.2s%22%2C%22mobile.style.animation-name%22%3A%22fadeInUp%22%2C%22mobile.style.animation-delay%22%3A%220.2s%22%7D%2C%22GROUP1572%22%3A%7B%22type%22%3A%22group%22%2C%22mobile.style.animation-name%22%3A%22fadeInUp%22%2C%22mobile.style.animation-delay%22%3A%220.2s%22%7D%2C%22POPUP1582%22%3A%7B%22type%22%3A%22popup%22%2C%22option.conversion_name%22%3A%22M%E1%BB%9F%20%C4%91%C4%83ng%20k%C3%BD%22%2C%22desktop.option.popup_position%22%3A%22default%22%2C%22desktop.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%2C%22mobile.option.popup_position%22%3A%22default%22%2C%22mobile.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%7D%2C%22BUTTON_TEXT1599%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON1599%22%3A%7B%22type%22%3A%22button%22%2C%22option.is_submit_form%22%3Afalse%2C%22option.is_buy_now%22%3Afalse%2C%22option.data_setting.type_dataset%22%3A%22COLLECTION%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM1601%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22text%22%2C%22option.input_tabindex%22%3A1%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM1602%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22email%22%2C%22option.input_tabindex%22%3A2%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM1603%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22tel%22%2C%22option.input_tabindex%22%3A3%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM1604%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22text%22%2C%22option.input_tabindex%22%3A4%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM1598%22%3A%7B%22type%22%3A%22form%22%2C%22option.form_config_id%22%3A%225f8947cdcf7c1706e949fd8a%22%2C%22option.form_send_ladipage%22%3Afalse%2C%22option.thankyou_type%22%3A%22default%22%2C%22option.thankyou_value%22%3A%22C%E1%BA%A3m%20%C6%A1n%20b%E1%BA%A1n%20%C4%91%C3%A3%20quan%20t%C3%A2m!%22%2C%22option.form_conversion_name%22%3A%22Lead%22%2C%22option.form_google_ads_conversion%22%3A%22UA-161840848-4%22%2C%22option.form_auto_funnel%22%3Atrue%2C%22option.form_captcha%22%3Atrue%2C%22option.form_auto_complete%22%3Atrue%2C%22option.is_form_coupon%22%3Afalse%2C%22option.is_form_login%22%3Afalse%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1605%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE1607%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22POPUP1606%22%3A%7B%22type%22%3A%22popup%22%2C%22option.conversion_name%22%3A%22M%E1%BB%9F%20%C4%91%C4%83ng%20k%C3%BD%22%2C%22desktop.option.popup_position%22%3A%22default%22%2C%22desktop.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%2C%22mobile.option.popup_position%22%3A%22default%22%2C%22mobile.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%7D%2C%22BUTTON_TEXT1623%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON1623%22%3A%7B%22type%22%3A%22button%22%2C%22option.is_submit_form%22%3Afalse%2C%22option.is_buy_now%22%3Afalse%2C%22option.data_setting.type_dataset%22%3A%22COLLECTION%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM1625%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22text%22%2C%22option.input_tabindex%22%3A1%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM1626%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22email%22%2C%22option.input_tabindex%22%3A3%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM1627%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22textarea%22%2C%22option.input_tabindex%22%3A7%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM1628%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22text%22%2C%22option.input_tabindex%22%3A4%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM1629%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22select_multiple%22%2C%22option.input_tabindex%22%3A5%2C%22option.input_country%22%3A%22VN%3AVi%E1%BB%87t%20Nam%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM1630%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22tel%22%2C%22option.input_tabindex%22%3A2%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM1631%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22text%22%2C%22option.input_tabindex%22%3A6%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM1622%22%3A%7B%22type%22%3A%22form%22%2C%22option.form_config_id%22%3A%225f8947cdcf7c1706e949fd8a%22%2C%22option.form_send_ladipage%22%3Afalse%2C%22option.thankyou_type%22%3A%22default%22%2C%22option.thankyou_value%22%3A%22C%E1%BA%A3m%20%C6%A1n%20b%E1%BA%A1n%20%C4%91%C3%A3%20quan%20t%C3%A2m!%22%2C%22option.form_conversion_name%22%3A%22Lead%22%2C%22option.form_auto_funnel%22%3Atrue%2C%22option.form_captcha%22%3Atrue%2C%22option.form_auto_complete%22%3Atrue%2C%22option.is_form_coupon%22%3Afalse%2C%22option.is_form_login%22%3Afalse%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1632%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22SECTION1642%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22solid%22%2C%22mobile.option.background-style%22%3A%22solid%22%7D%2C%22HEADLINE1644%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1658%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1660%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1663%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1666%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1669%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE1672%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE1673%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE1674%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1676%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22SECTION1677%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22gradient%22%2C%22mobile.option.background-style%22%3A%22gradient%22%7D%2C%22HEADLINE1678%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1681%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22SECTION1682%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22solid%22%2C%22mobile.option.background-style%22%3A%22solid%22%7D%2C%22HEADLINE1685%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH1686%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1691%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH1692%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1695%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH1696%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1697%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1701%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1705%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1711%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON_TEXT1715%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON1715%22%3A%7B%22type%22%3A%22button%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22popup%22%2C%22action%22%3A%22POPUP1582%22%7D%2C%22option.is_submit_form%22%3Afalse%2C%22option.is_buy_now%22%3Afalse%2C%22option.data_setting.type_dataset%22%3A%22COLLECTION%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%2C%22desktop.style.animation-name%22%3A%22pulse%22%2C%22desktop.style.animation-delay%22%3A%221s%22%2C%22mobile.style.animation-name%22%3A%22pulse%22%2C%22mobile.style.animation-delay%22%3A%221s%22%7D%2C%22HEADLINE1718%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1719%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1722%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1723%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1725%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1726%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1728%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1729%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON_TEXT1730%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON1730%22%3A%7B%22type%22%3A%22button%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22popup%22%2C%22action%22%3A%22POPUP1582%22%7D%2C%22option.is_submit_form%22%3Afalse%2C%22option.is_buy_now%22%3Afalse%2C%22option.data_setting.type_dataset%22%3A%22COLLECTION%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%2C%22desktop.style.animation-name%22%3A%22pulse%22%2C%22desktop.style.animation-delay%22%3A%221s%22%2C%22mobile.style.animation-name%22%3A%22pulse%22%2C%22mobile.style.animation-delay%22%3A%221s%22%7D%2C%22HEADLINE1732%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1736%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22GROUP1733%22%3A%7B%22type%22%3A%22group%22%2C%22desktop.style.animation-name%22%3A%22fadeInUp%22%2C%22desktop.style.animation-delay%22%3A%220.2s%22%2C%22mobile.style.animation-name%22%3A%22fadeInUp%22%2C%22mobile.style.animation-delay%22%3A%220.2s%22%7D%2C%22PARAGRAPH1739%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE1738%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE1740%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE1741%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE1744%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22GROUP1742%22%3A%7B%22type%22%3A%22group%22%2C%22desktop.style.animation-name%22%3A%22fadeInUp%22%2C%22desktop.style.animation-delay%22%3A%220.2s%22%2C%22mobile.style.animation-name%22%3A%22fadeInUp%22%2C%22mobile.style.animation-delay%22%3A%220.2s%22%7D%2C%22PARAGRAPH1745%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH1746%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%7D";
    window.LadiPageScript.run(true);
    window.LadiPageScript.runEventScroll();
  };
  render();
})();