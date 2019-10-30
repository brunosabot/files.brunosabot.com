;(function (window, document, undefined) {

	var Mobile = {
		menu: document.getElementById('mobile-menu'),
		parameter: document.getElementById('mobile-parameter'),
		layer: document.getElementById('mobile-layer'),
		headerMenu: document.getElementById('mobile-header-menu'),
		headerTitle: document.getElementById('mobile-header-title'),
		headerParameter: document.getElementById('mobile-header-parameter'),
		tabs: document.getElementsByClassName('mobile-tabs-item')
	};

	Mobile.headerMenu.addEventListener('click', function () {

		var menuClassName = Mobile.menu.className,
		headerMenuClassName = Mobile.headerMenu.className,
		parameterClassName = Mobile.parameter.className,
		headerParameterClassName = Mobile.headerParameter.className,
		layerClassName = Mobile.layer.className;

		if (menuClassName.indexOf('active') === -1) {
			Mobile.menu.className = menuClassName + ' active';
			Mobile.layer.className = layerClassName + ' active';
			Mobile.headerMenu.className = headerMenuClassName + ' active';
			Mobile.parameter.className = parameterClassName.replace(' active', '');
			Mobile.headerParameter.className = headerParameterClassName.replace(' active', '');
		} else {
			Mobile.menu.className = menuClassName.replace(' active', '');
			Mobile.layer.className = layerClassName.replace(' active', '');
			Mobile.headerMenu.className = headerMenuClassName.replace(' active', '');
		}

	}, true);

	Mobile.headerParameter.addEventListener('click', function () {

		var menuClassName = Mobile.menu.className,
		headerMenuClassName = Mobile.headerMenu.className,
		parameterClassName = Mobile.parameter.className,
		headerParameterClassName = Mobile.headerParameter.className,
		layerClassName = Mobile.layer.className;

		if (parameterClassName.indexOf('active') === -1) {
			Mobile.parameter.className = parameterClassName + ' active';
			Mobile.headerParameter.className = headerParameterClassName + ' active';
			Mobile.menu.className = menuClassName.replace(' active', '');
			Mobile.layer.className = layerClassName.replace(' active', '');
			Mobile.headerMenu.className = headerMenuClassName.replace(' active', '');
		} else {
			Mobile.parameter.className = parameterClassName.replace(' active', '');
			Mobile.headerParameter.className = headerParameterClassName.replace(' active', '');
		}

	}, true);

	var i = Mobile.tabs.length;
	while (--i >= 0) {

		Mobile.tabs[i].addEventListener('click', function () {

			var j = Mobile.tabs.length;
			while (--j >= 0) {
				Mobile.tabs[j].className = Mobile.tabs[j].className.replace(' active', '');
			}

			this.className = this.className + ' active';

		}, true);

	}

})(window, document);
