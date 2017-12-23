exports.addSecondSymbol = function(value)
{
	if(!isNaN(value) || value.slice(-1) != 's') return value + 's';
	
	return value;
};

exports.checkString = function(value)
{
	if(['true', 'false'].indexOf(value) != '-1')
		return (value === 'true');
	
	else if(!isNaN(value))
		return Number(value);
	
	return value.toLowerCase();
};

exports.checkUnit = function(value)
{
	const units = ['em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'ch', 'rem', 'vh', 'vw', 'vmin', 'vmax', 'vm'];
	
	let valueWithoutDigits = value.toString().replace(/[.,\d]+/g, '');
	
	return (units.indexOf(valueWithoutDigits) != '-1');
};

exports.getOptions = function(element)
{
	let options = {};
	const data_options = element.dataset.jauntyslider.replace(/['"\s]+/g, '').split(';');
	
	data_options.forEach(option => {
		if(option) {
			const [property, value] = option.split(':');
			options[property.toLowerCase()] = exports.checkString(value);
		}
	});
	
	return options;
};

exports.removeSecondSymbol = function(value)
{
	if(!isNaN(value)) return value;
	
	if(value.slice(-1) == 's') return value.slice(0, -1);
	
	return value;
};

exports.wrap = function(wrapperElement, wrappedElement)
{
	wrappedElement.parentNode.insertBefore(wrapperElement, wrappedElement);
	wrapperElement.appendChild(wrappedElement);
};
