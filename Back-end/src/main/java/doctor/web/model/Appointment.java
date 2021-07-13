package doctor.web.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="appointment")
public class Appointment {
	
	@Id
	private String app_id;
	private String doctor_id;
	private String patient_id;
	private String app_date;
	private String app_slot;
	
	
	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Appointment(String app_id, String doctor_id, String patient_id, String app_date, String app_slot) {
		super();
		this.app_id = app_id;
		this.doctor_id = doctor_id;
		this.patient_id = patient_id;
		this.app_date = app_date;
		this.app_slot = app_slot;
	}
	
	public String getApp_id() {
		return app_id;
	}
	public void setApp_id(String app_id) {
		this.app_id = app_id;
	}
	public String getDoctor_id() {
		return doctor_id;
	}
	public void setDoctor_id(String doctor_id) {
		this.doctor_id = doctor_id;
	}
	public String getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(String patient_id) {
		this.patient_id = patient_id;
	}
	public String getApp_date() {
		return app_date;
	}
	public void setApp_date(String app_date) {
		this.app_date = app_date;
	}
	public String getApp_slot() {
		return app_slot;
	}
	public void setApp_slot(String app_slot) {
		this.app_slot = app_slot;
	}

	@Override
	public String toString() {
		return "Appointment [app_id=" + app_id + ", doctor_id=" + doctor_id + ", patient_id=" + patient_id
				+ ", app_date=" + app_date + ", app_slot=" + app_slot + "]";
	}
	
	
	
}
