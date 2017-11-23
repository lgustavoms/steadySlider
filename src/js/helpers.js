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
		return parseInt(value);
	
	return value;
};

exports.createKeyframes = function(animation_name, current_position, next_position)
{
	return '@keyframes ' + animation_name + ' {\
				0% {\
					margin-left: -' + current_position + ';\
				}\
				100% {\
					margin-left: -' + next_position + ';\
				}\
			}';
};

exports.getOptions = function(element)
{
	let options = {};
	const data_options = element.dataset.jauntyslider.replace(/['"\s]+/g, '').split(';');
	
	data_options.forEach(option => {
		if(option) {
			const [property, value] = option.split(':');
			options[property.toLowerCase()] = exports.checkString(value.toLowerCase());
		}
	});
	
	return options;
};

exports.getUniqueName = function(string)
{
	return string + (new Date()).valueOf();
};

exports.removeSecondSymbol = function(value)
{
	if(!isNaN(value)) return value;
	
	if(value.slice(-1) == 's') return value.slice(0, -1);
	
	return value;
};

exports.wrap = function(wrapper_element, wrapped_element)
{
	wrapped_element.parentNode.insertBefore(wrapper_element, wrapped_element);
	wrapper_element.appendChild(wrapped_element);
};
