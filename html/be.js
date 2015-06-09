$(window).addEvent('domready', function() {
	var select = $('ctrl_htaccess_load_settings');
	if (select) {
		select.addEvent('change', function() {
			if (!this.value) {
				return;
			}
			if (confirm('Really load this settings?')) {
				Backend.autoSubmit('tl_htaccess');
			} else {
				this.selectedIndex = 0;
			}
		})
	}

	var select = $('ctrl_htaccess_load_previous');
	if (select) {
		select.addEvent('change', function() {
			if (!this.value) {
				return;
			}
			if (confirm('Really load this version?')) {
				Backend.autoSubmit('tl_htaccess');
			} else {
				this.selectedIndex = 0;
			}
		})
	}
});
