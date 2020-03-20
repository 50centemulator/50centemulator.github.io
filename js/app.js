function get_input() {
	var nation = document.getElementById('nation');
	var yiyuan = document.getElementById('yiyuan');
}
function mb1() {
	get_input();
	var result1 = "{{nation}}疫情已经失控了，我从{{yiyuan}}的朋友那里打听到，每天无数人问诊，但是没有试剂检测，只能把患者打发回家。{{nation}}老龄人口多，无数患者就自己死在家里了，没有确诊就不算得病，所以{{nation}}才保持这么低的增长，太可怕了。我已经订好回国机票了，关键时刻还是得集中力量办大事呀。";
    var regexn = new RegExp("\{\{nation\}\}", "g");
	var regexy = new RegExp("\{\{yiyuan\}\}", "g");
    result1 = result1.replace(regexn, nation.value, "g");
	result1 = result1.replace(regexy, yiyuan.value, "g");
	document.getElementById('result').innerText = result1;
}
function mb2() {
	get_input();
	var result2 = "{{nation}}疫情已经失控，很多大医院传出消息，每天无数人问诊，但是没有试剂检测，只能把患者打发回家。这边老龄人口多，无数患者就自己死在家里了，没有确诊就不算得病，所以才保持这么低的增长，太可怕了。身边很多人已经定好回国机票，关键时刻还是绿叶要归根。 \n 个人犹豫，到底要不要回？";
    var regexn = new RegExp("\{\{nation\}\}", "g");
	var regexy = new RegExp("\{\{yiyuan\}\}", "g");
    result2 = result2.replace(regexn, nation.value, "g");
	result2 = result2.replace(regexy, yiyuan.value, "g");
	document.getElementById('result').innerText =result2;
}
function mb3() {
	get_input();
	var result3 = "{{nation}}疫情已经失控了，我从{{yiyuan}}的朋友那里打听到，每天无数人问诊，但是没有试剂检测，只能把患者打发回家。加{{nation}}老龄人口多，无数患者就自己死在家里了，没有确诊就不算得病，所以{{nation}}才保持这么低的增长，太可怕了。我已经订好回国机票了，关键时刻还是得集中力量办大事呀。";
    var regexn = new RegExp("\{\{nation\}\}", "g");
	var regexy = new RegExp("\{\{yiyuan\}\}", "g");
    result3 = result3.replace(regexn, nation.value, "g");
	result3 = result3.replace(regexy, yiyuan.value, "g");
	document.getElementById('result').innerText=result3;
}
function nxns() {
	var nationnxns = document.getElementById('nation_nxns');
	var zhengfunxns = document.getElementById('zhengfu_nxns');
	var todo1nxns = document.getElementById('todo1_nxns');
	var todo2nxns = document.getElementById('todo2_nxns');
	var peoplenxns = document.getElementById('people_nxns');
	var todo3nxns = document.getElementById('todo3_nxns');
	var tongbaonxns = document.getElementById('tongbao_nxns');
	var xuexinxns = document.getElementById('xuexi_nxns');
	var resultnxns = "如果你觉得{{nationnxns}}不好，你就去建设它；如果你觉得{{zhengfunxns}}不好，你就去{{todo1nxns}}去{{todo2nxns}}；如果你觉得{{peoplenxns}}没素质，就从你开始{{todo3nxns}}；如果你觉得{{tongbaonxns}}愚昧无知，就从你开始{{xuexinxns}}，而不是一味的谩骂、抱怨、逃离。";
	var regex1 = new RegExp("\{\{nationnxns\}\}", "g");
	var regex2 = new RegExp("\{\{nationnxns\}\}", "g");
	var regex3 = new RegExp("\{\{todo1nxns\}\}", "g");
	var regex4 = new RegExp("\{\{todo2nxns\}\}", "g");
	var regex5 = new RegExp("\{\{peoplenxns\}\}", "g");
	var regex6 = new RegExp("\{\{todo3nxns\}\}", "g");
	var regex7 = new RegExp("\{\{tongbaonxns\}\}", "g");
	var regex8 = new RegExp("\{\{xuexinxns\}\}", "g");
	resultnxns = resultnxns.replace(regex1, nationnxns.value, "g");
	resultnxns = resultnxns.replace(regex2, zhengfunxns.value, "g");
	resultnxns = resultnxns.replace(regex3, todo1nxns.value, "g");
	resultnxns = resultnxns.replace(regex4, todo2nxns.value, "g");
	resultnxns = resultnxns.replace(regex5, peoplenxns.value, "g");
	resultnxns = resultnxns.replace(regex6, todo3nxns.value, "g");
	resultnxns = resultnxns.replace(regex7, tongbaonxns.value, "g");
	resultnxns = resultnxns.replace(regex8, xuexinxns.value, "g");
	document.getElementById('result_nxns').innerText=resultnxns;
}
