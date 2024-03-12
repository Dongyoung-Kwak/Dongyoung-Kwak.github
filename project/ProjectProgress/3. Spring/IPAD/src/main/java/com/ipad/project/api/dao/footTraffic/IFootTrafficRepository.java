package com.ipad.project.api.dao.footTraffic;

import com.ipad.project.locationAnalysis.model.FootTrafficVO;

public interface IFootTrafficRepository {
	void saveRecord(FootTrafficVO vo);
	void updateDate(FootTrafficVO vo);
	
}
