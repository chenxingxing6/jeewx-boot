package com.jeecg.p3.weixin.entity;

import java.util.Date;

import org.jeecgframework.p3.core.utils.persistence.Entity;

/**
 * 描述：</b>关键字表<br>
 * @author LeeShaoQing
 * @since：2018年07月20日 10时11分12秒 星期五 
 * @version:1.0
 */
public class WeixinAutoresponse implements Entity<String> {
	private static final long serialVersionUID = 1L;
		/**	 *	 */	private String id;	/**	 *关键字	 */	private String keyword;	/**	 *消息类型(text:文本消息,news:图文消息,voice:音频消息,video:视频消息,image,图片消息)	 */	private String msgType;	/**	 *模板ID	 */	private String templateId;	/**	 *关联模板名称	 */	private String templateName;	/**	 *微信ID	 */	private String jwid;	/**	 *关键字类型1:全匹配  2：模糊匹配	 */	private String keywordType;	/**	 *创建人登录名称	 */	private String createBy;	/**	 *创建时间	 */	private Date createTime;	/**	 *修改人登录名称	 */	private String updateBy;	/**	 *修改时间	 */	private Date updateTime;	/**	 *是否启用	 */	private String iswork;	public String getId() {	    return this.id;	}	public void setId(String id) {	    this.id=id;	}	public String getKeyword() {	    return this.keyword;	}	public void setKeyword(String keyword) {	    this.keyword=keyword;	}	public String getMsgType() {	    return this.msgType;	}	public void setMsgType(String msgType) {	    this.msgType=msgType;	}	public String getTemplateId() {	    return this.templateId;	}	public void setTemplateId(String templateId) {	    this.templateId=templateId;	}	public String getTemplateName() {	    return this.templateName;	}	public void setTemplateName(String templateName) {	    this.templateName=templateName;	}	public String getJwid() {	    return this.jwid;	}	public void setJwid(String jwid) {	    this.jwid=jwid;	}	public String getKeywordType() {	    return this.keywordType;	}	public void setKeywordType(String keywordType) {	    this.keywordType=keywordType;	}	public String getCreateBy() {	    return this.createBy;	}	public void setCreateBy(String createBy) {	    this.createBy=createBy;	}	public Date getCreateTime() {	    return this.createTime;	}	public void setCreateTime(Date createTime) {	    this.createTime=createTime;	}	public String getUpdateBy() {	    return this.updateBy;	}	public void setUpdateBy(String updateBy) {	    this.updateBy=updateBy;	}	public Date getUpdateTime() {	    return this.updateTime;	}	public void setUpdateTime(Date updateTime) {	    this.updateTime=updateTime;	}	public String getIswork() {	    return this.iswork;	}	public void setIswork(String iswork) {	    this.iswork=iswork;	}
}

