package com.ipad.project.api.service.footTraffic;

import java.io.IOException;

import com.fasterxml.jackson.databind.JsonNode;
import com.ipad.project.api.model.footTraffic.FootTrafficVO;

public interface IFootTrafficService {
	void saveRecord(FootTrafficVO vo);
	void updateDate(FootTrafficVO vo);
	String fetchDataFromAPI(int start, int end) throws IOException;
	void insertData();
	JsonNode parseJsonData(String jsonData) throws IOException;
}
