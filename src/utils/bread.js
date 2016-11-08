/**
 * [parseBreadAll 把数据扁平化]
 * @param  {[Object]} data [数据]
 * @param  {[String]} pId  [父id，最顶层是null]
 * @return {[Array]}      [返回扁平化之后的数据]
 */
function parseBreadAll(data, pId) {
	let tmpArray = [];
	tmpArray.push({
		id: data.id,
		name: data.name,
		to: data.to,
		parent: pId
	});

	if (data.children && data.children.length > 0) {
		data.children.forEach((item) => {
			tmpArray = tmpArray.concat(parseBreadAll(item, data.id));
		});
	}
	return tmpArray;
}

/**
 * [getBreadArr 根据当前hish返回面包屑]
 * @param  {[type]} dataArr [description]
 * @param  {[type]} to      [description]
 * @return {[type]}         [description]
 */
function getBreadArr(dataArr, to) {
	let tmpObj = {};
	dataArr = parseBreadAll(dataArr, null);
	dataArr.forEach((item) => {
		if (item.to == to) tmpObj = item;
	});

	if (!tmpObj.to) return;

	return loopUp(dataArr, tmpObj);
}

/**
 * [loopUp 根据当前元素找到祖级元素]
 * @param  {[type]} dataArr  [description]
 * @param  {[type]} children [description]
 * @return {[type]}          [description]
 */
function loopUp(dataArr, children) {
	let tmpArr = [];
	tmpArr.push(children);

	if (children.parent !== null) {
		let tmp = null;
		dataArr.forEach((item) => {
			if (item.id == children.parent) {
				tmp = item;
			}
		});
		tmpArr = tmpArr.concat(loopUp(dataArr, tmp));
	}

	return tmpArr;
}



export {
	getBreadArr
}