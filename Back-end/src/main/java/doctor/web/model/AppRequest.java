package doctor.web.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="app_request")
public class AppRequest {
	
	@Id
	private String id;
	private String patient_id;
	private String doctor_id;
	private String date;
	private String slot;
	private String status;
	private String doctor_name;
	private String patient_name;
	private String description;
	
	
	public AppRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public AppRequest(String id, String patient_id, String doctor_id,String doctor_name,String patient_name, String date, String slot, String status,String description) {
		super();
		this.id = id;
		this.patient_id = patient_id;
		this.doctor_id = doctor_id;
		this.doctor_name =  doctor_name;
		this.patient_name = patient_name;
		this.date = date;
		this.slot = slot;
		this.status = status;
		this.description = description;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(String patient_id) {
		this.patient_id = patient_id;
	}
	public String getDoctor_id() {
		return doctor_id;
	}
	public void setDoctor_id(String doctor_id) {
		this.doctor_id = doctor_id;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getSlot() {
		return slot;
	}
	public void setSlot(String slot) {
		this.slot = slot;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getDoctor_name() {
		return doctor_name;
	}

	public void setDoctor_name(String doctor_name) {
		this.doctor_name = doctor_name;
	}


	public String getPatient_name() {
		return patient_name;
	}


	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}
	
	

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "AppRequest [id=" + id + ", patient_id=" + patient_id + ", doctor_id=" + doctor_id + ", date=" + date
				+ ", slot=" + slot + ", status=" + status + ", doctor_name=" + doctor_name + ", patient_name="
				+ patient_name + ", description=" + description + "]";
	}
	
}
