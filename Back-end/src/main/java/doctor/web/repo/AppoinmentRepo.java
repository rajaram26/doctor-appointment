package doctor.web.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import doctor.web.model.Appointment;

public interface AppoinmentRepo extends CrudRepository<Appointment, String> {
	
	
	@Query(value="select * from appointment where doctor_id=?1 and app_date=?2 ", nativeQuery = true)
	List<Appointment> findSlot(String id, String date);

}
