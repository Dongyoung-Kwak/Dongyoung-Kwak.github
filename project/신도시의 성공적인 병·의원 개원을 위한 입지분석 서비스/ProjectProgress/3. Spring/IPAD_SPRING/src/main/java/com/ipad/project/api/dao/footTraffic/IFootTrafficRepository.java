package com.ipad.project.api.dao.footTraffic;

import com.ipad.project.api.model.footTraffic.FootTrafficVO;

public interface IFootTrafficRepository {
	void saveRecord(FootTrafficVO vo);
	void updateDate(FootTrafficVO vo);
	
}
