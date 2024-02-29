package com.ipad.project.api.service.footTraffic;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ipad.project.api.dao.footTraffic.IFootTrafficRepository;
import com.ipad.project.api.model.footTraffic.FootTrafficVO;

@Service
public class FootTrafficService implements IFootTrafficService {

	@Autowired
	IFootTrafficRepository footTrafficRepository;

	@Override
	public void saveRecord(FootTrafficVO vo) {
		footTrafficRepository.saveRecord(vo);

	}

	@Override
	public void updateDate(FootTrafficVO vo) {
		footTrafficRepository.updateDate(vo);

	}

	@Override
	public String fetchDataFromAPI(int start, int end) throws IOException {
		
		String url = "http://openapi.seoul.go.kr:8088/4b45426a4e6a756e353463624e574c/json/VwsmAdstrdFlpopW";
		
		StringBuilder urlBuilder = new StringBuilder(url);
		urlBuilder.append("/" + start);
		urlBuilder.append("/" + end);

		try (BufferedReader reader = new BufferedReader(
				new InputStreamReader(new URL(urlBuilder.toString()).openStream()))) {
			StringBuilder apiResponse = new StringBuilder();
			String line;
			while ((line = reader.readLine()) != null) {
				apiResponse.append(line);
			}
			return apiResponse.toString();
		}
	}

	@Override
	public void insertData() {
		try {
			int start = 1;
			int end = 1000;
			int max;
			do {
				JsonNode jsonData = parseJsonData(fetchDataFromAPI(start, end));
				JsonNode resultNode = jsonData.get("VwsmAdstrdFlpopW").get("row");
				max = jsonData.get("VwsmAdstrdFlpopW").get("list_total_count").asInt();
				for (JsonNode populationNode : resultNode) {
					System.out.println(populationNode);
//					saveRecord(populationNode);
//					updateDate(populationNode);
				}
				start = start + 1000;
				end = end + 1000;
			} while (start <= max);

		} catch (Exception e) {
			e.printStackTrace();
		}		
	}

	@Override
	public JsonNode parseJsonData(String jsonData) throws IOException {
		ObjectMapper objectMapper = new ObjectMapper();
		return objectMapper.readTree(jsonData);
	}

}
