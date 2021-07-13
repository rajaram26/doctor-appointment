package doctor.web.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="UserProfile")
public class UserProfile {
	
	@Id
	private String id;
	private String role;
	private String name;
	private String email;
	private String password;
	private String mobile;
	
	public UserProfile(String id, String role, String name, String email,String mobile, String password) {
		super();
		this.id = id;
		this.role = role;
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.password = password;
	}


	public UserProfile() {
		super();
		// TODO Auto-generated constructor stub
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}

	
	
	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "UserProfile [id=" + id + ", role=" + role + ", name=" + name + ", email=" + email + ", password="
				+ password + "]";
	}
	
	

}
