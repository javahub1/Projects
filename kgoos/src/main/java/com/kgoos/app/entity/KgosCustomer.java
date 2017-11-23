package com.kgoos.app.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

//@Entity
//@Table(name = "KGOS_Customer", schema = "dbo", catalog = "BestGain_KGOS")
public class KgosCustomer {
    @Id
    private long custSn;
    private String custMail;
    private String custName;
    private String shortName;
    private String custPassword;
    private String wangId;
    private String wangName;
    private String contact;
    private String phone;
    private String postCode;
    private String addr01;
    private String addr02;
    private String addr03;
    private String addr04;
    private String introducer;
    private String status;
    private String remark;
    private Timestamp createDate;
    private String createBy;
    private String createApp;
    private String createRef;
    private Timestamp updateDate;
    private String updateBy;
    private String updateApp;
    private String updateRef;
    private Serializable rowPointer;

    @Basic
    @Column(name = "CustSN")
    public long getCustSn() {
        return custSn;
    }

    public void setCustSn(long custSn) {
        this.custSn = custSn;
    }

    @Basic
    @Column(name = "CustMail")
    public String getCustMail() {
        return custMail;
    }

    public void setCustMail(String custMail) {
        this.custMail = custMail;
    }

    @Basic
    @Column(name = "CustName")
    public String getCustName() {
        return custName;
    }

    public void setCustName(String custName) {
        this.custName = custName;
    }

    @Basic
    @Column(name = "ShortName")
    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    @Basic
    @Column(name = "CustPassword")
    public String getCustPassword() {
        return custPassword;
    }

    public void setCustPassword(String custPassword) {
        this.custPassword = custPassword;
    }

    @Basic
    @Column(name = "WangID")
    public String getWangId() {
        return wangId;
    }

    public void setWangId(String wangId) {
        this.wangId = wangId;
    }

    @Basic
    @Column(name = "WangName")
    public String getWangName() {
        return wangName;
    }

    public void setWangName(String wangName) {
        this.wangName = wangName;
    }

    @Basic
    @Column(name = "Contact")
    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    @Basic
    @Column(name = "Phone")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Basic
    @Column(name = "PostCode")
    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    @Basic
    @Column(name = "Addr01")
    public String getAddr01() {
        return addr01;
    }

    public void setAddr01(String addr01) {
        this.addr01 = addr01;
    }

    @Basic
    @Column(name = "Addr02")
    public String getAddr02() {
        return addr02;
    }

    public void setAddr02(String addr02) {
        this.addr02 = addr02;
    }

    @Basic
    @Column(name = "Addr03")
    public String getAddr03() {
        return addr03;
    }

    public void setAddr03(String addr03) {
        this.addr03 = addr03;
    }

    @Basic
    @Column(name = "Addr04")
    public String getAddr04() {
        return addr04;
    }

    public void setAddr04(String addr04) {
        this.addr04 = addr04;
    }

    @Basic
    @Column(name = "Introducer")
    public String getIntroducer() {
        return introducer;
    }

    public void setIntroducer(String introducer) {
        this.introducer = introducer;
    }

    @Basic
    @Column(name = "Status")
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Basic
    @Column(name = "Remark")
    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Basic
    @Column(name = "CreateDate")
    public Timestamp getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Timestamp createDate) {
        this.createDate = createDate;
    }

    @Basic
    @Column(name = "CreateBy")
    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy;
    }

    @Basic
    @Column(name = "CreateApp")
    public String getCreateApp() {
        return createApp;
    }

    public void setCreateApp(String createApp) {
        this.createApp = createApp;
    }

    @Basic
    @Column(name = "CreateRef")
    public String getCreateRef() {
        return createRef;
    }

    public void setCreateRef(String createRef) {
        this.createRef = createRef;
    }

    @Basic
    @Column(name = "UpdateDate")
    public Timestamp getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Timestamp updateDate) {
        this.updateDate = updateDate;
    }

    @Basic
    @Column(name = "UpdateBy")
    public String getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(String updateBy) {
        this.updateBy = updateBy;
    }

    @Basic
    @Column(name = "UpdateApp")
    public String getUpdateApp() {
        return updateApp;
    }

    public void setUpdateApp(String updateApp) {
        this.updateApp = updateApp;
    }

    @Basic
    @Column(name = "UpdateRef")
    public String getUpdateRef() {
        return updateRef;
    }

    public void setUpdateRef(String updateRef) {
        this.updateRef = updateRef;
    }

    @Basic
    @Column(name = "RowPointer")
    public Serializable getRowPointer() {
        return rowPointer;
    }

    public void setRowPointer(Serializable rowPointer) {
        this.rowPointer = rowPointer;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        KgosCustomer that = (KgosCustomer) o;

        if (custSn != that.custSn) return false;
        if (custMail != null ? !custMail.equals(that.custMail) : that.custMail != null) return false;
        if (custName != null ? !custName.equals(that.custName) : that.custName != null) return false;
        if (shortName != null ? !shortName.equals(that.shortName) : that.shortName != null) return false;
        if (custPassword != null ? !custPassword.equals(that.custPassword) : that.custPassword != null) return false;
        if (wangId != null ? !wangId.equals(that.wangId) : that.wangId != null) return false;
        if (wangName != null ? !wangName.equals(that.wangName) : that.wangName != null) return false;
        if (contact != null ? !contact.equals(that.contact) : that.contact != null) return false;
        if (phone != null ? !phone.equals(that.phone) : that.phone != null) return false;
        if (postCode != null ? !postCode.equals(that.postCode) : that.postCode != null) return false;
        if (addr01 != null ? !addr01.equals(that.addr01) : that.addr01 != null) return false;
        if (addr02 != null ? !addr02.equals(that.addr02) : that.addr02 != null) return false;
        if (addr03 != null ? !addr03.equals(that.addr03) : that.addr03 != null) return false;
        if (addr04 != null ? !addr04.equals(that.addr04) : that.addr04 != null) return false;
        if (introducer != null ? !introducer.equals(that.introducer) : that.introducer != null) return false;
        if (status != null ? !status.equals(that.status) : that.status != null) return false;
        if (remark != null ? !remark.equals(that.remark) : that.remark != null) return false;
        if (createDate != null ? !createDate.equals(that.createDate) : that.createDate != null) return false;
        if (createBy != null ? !createBy.equals(that.createBy) : that.createBy != null) return false;
        if (createApp != null ? !createApp.equals(that.createApp) : that.createApp != null) return false;
        if (createRef != null ? !createRef.equals(that.createRef) : that.createRef != null) return false;
        if (updateDate != null ? !updateDate.equals(that.updateDate) : that.updateDate != null) return false;
        if (updateBy != null ? !updateBy.equals(that.updateBy) : that.updateBy != null) return false;
        if (updateApp != null ? !updateApp.equals(that.updateApp) : that.updateApp != null) return false;
        if (updateRef != null ? !updateRef.equals(that.updateRef) : that.updateRef != null) return false;
        if (rowPointer != null ? !rowPointer.equals(that.rowPointer) : that.rowPointer != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) (custSn ^ (custSn >>> 32));
        result = 31 * result + (custMail != null ? custMail.hashCode() : 0);
        result = 31 * result + (custName != null ? custName.hashCode() : 0);
        result = 31 * result + (shortName != null ? shortName.hashCode() : 0);
        result = 31 * result + (custPassword != null ? custPassword.hashCode() : 0);
        result = 31 * result + (wangId != null ? wangId.hashCode() : 0);
        result = 31 * result + (wangName != null ? wangName.hashCode() : 0);
        result = 31 * result + (contact != null ? contact.hashCode() : 0);
        result = 31 * result + (phone != null ? phone.hashCode() : 0);
        result = 31 * result + (postCode != null ? postCode.hashCode() : 0);
        result = 31 * result + (addr01 != null ? addr01.hashCode() : 0);
        result = 31 * result + (addr02 != null ? addr02.hashCode() : 0);
        result = 31 * result + (addr03 != null ? addr03.hashCode() : 0);
        result = 31 * result + (addr04 != null ? addr04.hashCode() : 0);
        result = 31 * result + (introducer != null ? introducer.hashCode() : 0);
        result = 31 * result + (status != null ? status.hashCode() : 0);
        result = 31 * result + (remark != null ? remark.hashCode() : 0);
        result = 31 * result + (createDate != null ? createDate.hashCode() : 0);
        result = 31 * result + (createBy != null ? createBy.hashCode() : 0);
        result = 31 * result + (createApp != null ? createApp.hashCode() : 0);
        result = 31 * result + (createRef != null ? createRef.hashCode() : 0);
        result = 31 * result + (updateDate != null ? updateDate.hashCode() : 0);
        result = 31 * result + (updateBy != null ? updateBy.hashCode() : 0);
        result = 31 * result + (updateApp != null ? updateApp.hashCode() : 0);
        result = 31 * result + (updateRef != null ? updateRef.hashCode() : 0);
        result = 31 * result + (rowPointer != null ? rowPointer.hashCode() : 0);
        return result;
    }
}
