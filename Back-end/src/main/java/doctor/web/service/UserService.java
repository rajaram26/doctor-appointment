package doctor.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doctor.web.model.AppRequest;
import doctor.web.model.Appointment;
import doctor.web.model.UserProfile;
import doctor.web.repo.AppoinmentRepo;
import doctor.web.repo.ProfileRepo;
import doctor.web.repo.RequestRepo;

@Service
public class UserService {
	
	@Autowired
	ProfileRepo profileRepo;
	
	@Autowired
	AppoinmentRepo appRepo;
	
	@Autowired
	RequestRepo reqRepo;
	
	public void saveUser(UserProfile user) {
		profileRepo.save(user);
	}
	
	public UserProfile loginCheck(String email,String password) {
		List<UserProfile> user = profileRepo.checkProfile(email,password);
		if(user.size()==0) {
			return null;
		}
		return profileRepo.checkProfile(email,password).get(0);
	}

	public List<UserProfile> getAllDoctor() {
		return profileRepo.getDoctors();
	}

	public void addAppoint(Appointment app) {
		appRepo.save(app);
	}

	public int[] checkSlot(String id, String date) {
		List<AppRequest> list = reqRepo.findSlot(id,date);
		int slot[]=new int[5];
		if(list.size()==0) {
			return slot;
		}
	    for(int i=0;i<list.size();i++) {
	    	String s = list.get(i).getSlot();
	    	int k = Integer.parseInt(s.substring(5));
	    	if(k==1) {
	    		slot[0]=1;
	    	}else if(k==2) {
	    		slot[1]=1;
	    	}else if(k==3) {
	    		slot[2]=1;
	    	}else if(k==4) {
	    		slot[3]=1;
	    	}else if(k==5) {
	    		slot[4]=1;
	    	}
	    }
	    return slot;
	}

	public void addRequest(AppRequest req) {
		reqRepo.save(req);
	}

	public List<AppRequest> getListByPatientId(String id) {
		return  reqRepo.findAllById(id);
	}

	public List<AppRequest> getAllAppRequest(String id) {
		return reqRepo.getAllAppRequest(id);
	}

	public AppRequest getAppById(String id) {
		return (AppRequest) reqRepo.findAppById(id);
	}

	public List<AppRequest> getConfrimedAppById(String id) {
		return reqRepo.getConfrimedAppById(id);
	}

	public void deleteDoctor(String id) {
		profileRepo.deleteById(id);
		deleteDoctorRequests(id);
	}
	
	public void deleteDoctorRequests(String id) {
		reqRepo.deleteByDoctorId(id);
	}

	public List<AppRequest> getPatientByDesc(String id) {
		return reqRepo.getPatientByDesc(id);
	}

	public UserProfile getUserById(String id) {
		return profileRepo.getUserById(id);
	}
}
