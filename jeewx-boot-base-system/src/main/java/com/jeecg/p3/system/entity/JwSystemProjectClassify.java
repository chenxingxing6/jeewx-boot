package com.jeecg.p3.system.entity;

import java.util.Date;
import java.util.List;
import org.jeecgframework.p3.core.utils.persistence.Entity;

/**
 * 描述：</b>JwSystemProjectClassify:<br>
 * @author huangqingquan
 * @since：2016年08月08日 09时33分31秒 星期一 
 * @version:1.0
 */
public class JwSystemProjectClassify implements Entity<String> {
	private static final long serialVersionUID = 1L;
	
	/**
	 * 当前类的集合
	 */
	public String getId() {
	@Override
	public String toString() {
		return "JwSystemProjectClassify [id=" + id + ", name=" + name
				+ ", baseId=" + baseId + ", baseName=" + baseName + ", sort="
				+ sort + ", creatName=" + creatName + ", createTime="
				+ createTime + ", updateName=" + updateName + "]";
	}
}
