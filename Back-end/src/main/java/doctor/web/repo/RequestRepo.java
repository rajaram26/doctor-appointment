package doctor.web.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import doctor.web.model.AppRequest;

@Transactional
@Repository
public interface RequestRepo extends CrudRepository<AppRequest, String> {
	
	@Query(value="select * from app_request where doctor_id=?1 and date=?2 ", nativeQuery = true)
	List<AppRequest> findSlot(String id, String date);
	
	@Query(value="select * from app_request where patient_id=?1", nativeQuery = true)
	List<AppRequest> findAllById(String id);

	@Query(value="select * from app_request where doctor_id=?1 and status='pending'", nativeQuery = true)
	List<AppRequest> getAllAppRequest(String id);
	
	@Query(value="select * from app_request where id=?1", nativeQuery = true)
	AppRequest findAppById(String id);
	
	@Query(value="select * from app_request where doctor_id=?1 and status='confirmed'", nativeQuery = true)
	List<AppRequest> getConfrimedAppById(String id);
	
	@Modifying
	@Query(value="delete from app_request where doctor_id=?1", nativeQuery = true)
	void deleteByDoctorId(String id);
	
	@Query(value="select * from app_request where patient_id=?1 and status='confirmed'", nativeQuery = true)
	List<AppRequest> getPatientByDesc(String id);
	
	

}
