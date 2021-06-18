/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.companyentity;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author roger
 */
@Entity
@Table(name = "Departament")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Departament.findAll", query = "SELECT d FROM Departament d"),
    @NamedQuery(name = "Departament.findByIdDepartament", query = "SELECT d FROM Departament d WHERE d.idDepartament = :idDepartament"),
    @NamedQuery(name = "Departament.findByDescription", query = "SELECT d FROM Departament d WHERE d.description = :description")})
public class Departament implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "idDepartament")
    private Integer idDepartament;
    @Column(name = "description")
    private String description;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "departament")
    private Employee employee;
    @JoinColumn(name = "idDepartament", referencedColumnName = "idCompany", insertable = false, updatable = false)
    @OneToOne(optional = false)
    private Company company;

    public Departament() {
    }

    public Departament(Integer idDepartament) {
        this.idDepartament = idDepartament;
    }

    public Integer getIdDepartament() {
        return idDepartament;
    }

    public void setIdDepartament(Integer idDepartament) {
        this.idDepartament = idDepartament;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idDepartament != null ? idDepartament.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Departament)) {
            return false;
        }
        Departament other = (Departament) object;
        if ((this.idDepartament == null && other.idDepartament != null) || (this.idDepartament != null && !this.idDepartament.equals(other.idDepartament))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mycompany.companyentity.Departament[ idDepartament=" + idDepartament + " ]";
    }
    
}
