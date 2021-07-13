package doctor.web.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import doctor.web.model.AppRequest;
import doctor.web.model.Appointment;
import doctor.web.model.UserProfile;
import doctor.web.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	
	@Autowired
	UserService user_service;
	
	@PostMapping("/addUser")
	public String AddUser(@RequestBody UserProfile user) {
		user_service.saveUser(user);
		return "Account created successfully !!";
	}
	
	@PostMapping("/loginCheck")
	public UserProfile Check(@RequestParam("email") String email,@RequestParam("password") String password) {
		return user_service.loginCheck(email, password);
	}
	
	@GetMapping("/getDoctors")
	public List<UserProfile> getDoctor() {
		return user_service.getAllDoctor();
	}
	
	@GetMapping("/findFreeSlot")
	public int[] findFreeSlots(@RequestParam("doctor_name") String doctor_name,@RequestParam("date") String date) {
		return user_service.checkSlot(doctor_name,date);
	}
	
	@PostMapping("/addAppointment")
	public String addAppointment(@RequestBody Appointment app) {
		user_service.addAppoint(app);
		return "Appointment Booking is confirmed";
	}
	
	@PostMapping("/addRequest")	
	public String addRequest(@RequestBody AppRequest req) {
		user_service.addRequest(req);
//		System.out.println(req.toString());
		return "Booking request has been sent !!!";
	}
	
	@GetMapping("/getListByPatientId/{id}")
	public List<AppRequest> getListByPatientId(@PathVariable String id ) {
		return user_service.getListByPatientId(id);
	}
	
	@GetMapping("/getAllAppRequest/{id}")
	public List<AppRequest> getAllAppRequest(@PathVariable String id ) {
		return user_service.getAllAppRequest(id);
	}
	
	@GetMapping("/getAppById/{id}")
	public AppRequest getAppById(@PathVariable String id) {
		return user_service.getAppById(id);
	}
	
	@GetMapping("/getConfrimedAppById/{id}")
	public List<AppRequest> getConfrimedAppById(@PathVariable String id) {
		return user_service.getConfrimedAppById(id);
	}
		
	@DeleteMapping("/deleteDoctor/{id}")
	public String deleteDoctor(@PathVariable String id) {
		user_service.deleteDoctor(id);
		return "Doctor profile is deleted successfully !!";
	}
	
	@GetMapping("/getPatientByDesc/{id}")
	public List<AppRequest> getPatientByDesc(@PathVariable String id) {
		return user_service.getPatientByDesc(id);
	}
	
	@GetMapping("/getUserById/{id}")
	public UserProfile getUserById(@PathVariable String id) {
		return user_service.getUserById(id);
	}
}
