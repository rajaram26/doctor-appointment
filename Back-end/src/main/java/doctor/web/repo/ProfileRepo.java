package doctor.web.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import doctor.web.model.UserProfile;


@Repository
public interface ProfileRepo extends CrudRepository<UserProfile, String> {
	
	@Query(value="select * from user_profile where email=?1 and password=?2",nativeQuery = true)
	List<UserProfile> checkProfile(String email, String password);
	
	@Query(value="select * from user_profile where role='DOCTOR'",nativeQuery = true)
	List<UserProfile> getDoctors();
	
	@Query(value="select * from user_profile where id=?1",nativeQuery = true)
	UserProfile getUserById(String id);

}
