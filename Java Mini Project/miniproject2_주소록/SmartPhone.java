package miniproject.miniproject2;

import java.util.Scanner;

public class SmartPhone {
	Addr[] addrs;
	int numOfCount = 0;
	Scanner in;

	public SmartPhone() {
		addrs = new Addr[10];
		in = new Scanner(System.in);
	}

	public Addr inputContactData() {
		System.out.print("이름 : ");
		String name = in.nextLine();
		System.out.print("전화번호 : ");
		String phoneNumber = in.nextLine();
		System.out.print("이메일 : ");
		String email = in.nextLine();
		System.out.print("주소 : ");
		String address = in.nextLine();
		System.out.print("그룹(친구/가족) : ");
		String group = in.nextLine();

		return new Addr(name, phoneNumber, email, address, group);
	}

	// 배열에 연락처 저장
	public void addAddr(Addr addr) {
		addrs[numOfCount] = addr;
		numOfCount++;
		System.out.println(">>데이터 저장되었습니다. (" + numOfCount + ")");
	}

	// 연락처 출력
	public void printAddr(Addr addr) {
		System.out.println("----------------------");
		System.out.println("이름 : " + addr.getName());
		System.out.println("전화번호 : " + addr.getPhoneNumber());
		System.out.println("이메일 : " + addr.getEmail());
		System.out.println("주소 : " + addr.getAddress());
		System.out.println("그룹 : " + addr.getGroup());
	}

	// 모든 연락처 출력
	public void printAllAddr() {
		for (int i = 0; i < numOfCount; i++) {
			printAddr(addrs[i]);
		}
	}

	// 연락처 검색
	public void searchAddr(String name) {
		for (int i = 0; i < numOfCount; i++) {
			Addr addr = addrs[i];
			if (addr.getName().contentEquals(name)) {
				printAddr(addr);
				return;
			}
		}
		System.out.println("검색 결과가 없습니다.");
	}

	// 연락처 삭제
	public void deleteAddr(String name) {
		for (int i = 0; i < numOfCount; i++) {
			Addr addr = addrs[i];
			if (addr.getName().contentEquals(name)) {
				for (int j = i; j < numOfCount; j++) {
					addrs[j] = addrs[j + 1];
				}
				numOfCount--;
				return;
			}
		}
		System.out.println("검색 결과가 없습니다.");
	}

	// 연락처 수정
	public void editAddr(String name, Addr newContact) {
		for (int i = 0; i < numOfCount; i++) {
			if (addrs[i].getName().contentEquals(name)) {
				addrs[i] = newContact;
				return;
			}
		}

		System.out.println("검색 결과가 없습니다.");
	}

}
