const initialData = {
  options: [
    {
      id: 1,
      name: 'Subjective Assessments',
      options: [
        {
          groupid: 1,
          searchString: '',
          groupname: 'Red Flag',
          groupitems: [
            {
              id: 1,
              name: 'Information A',
              itemSelected: false,
            },
            {
              id: 20,
              name: 'Information B',
              itemSelected: false,
            },
            {
              id: 3,
              name: 'Information C',
              itemSelected: false,
            },
            {
              id: 4,
              name: 'Information D',
              itemSelected: false,
            },
          ],
        },
        {
          groupid: 2,
          searchString: '',
          groupname: 'Symptom Describe',
          groupitems: [
            {
              id: 5,
              name: 'Information A',
              itemSelected: false,
            },
            {
              id: 6,
              name: 'Information B',
              itemSelected: false,
            },
            {
              id: 7,
              name: 'Information C',
              itemSelected: false,
            },
            {
              id: 8,
              name: 'Information D',
              itemSelected: false,
            },
          ],
        },
        {
          groupid: 3,
          searchString: '',
          groupname: 'Pain Depth',
          groupitems: [
            {
              id: 9,
              name: 'Information A',
              itemSelected: false,
            },
            {
              id: 10,
              name: 'Information B',
              itemSelected: false,
            },
            {
              id: 11,
              name: 'Information C',
              itemSelected: false,
            },
            {
              id: 12,
              name: 'Information D',
              itemSelected: false,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Objective Assessments',
      options: [
        {
          groupid: 1,
          searchString: '',
          groupname: 'Red Flag',
          groupitems: [
            {
              id: 1,
              name: 'Information A',
              itemSelected: false,
            },
            {
              id: 20,
              name: 'Information B',
              itemSelected: false,
            },
            {
              id: 3,
              name: 'Information C',
              itemSelected: false,
            },
            {
              id: 4,
              name: 'Information D',
              itemSelected: false,
            },
          ],
        },
        {
          groupid: 2,
          searchString: '',
          groupname: 'Symptom Describe',
          groupitems: [
            {
              id: 5,
              name: 'Information A',
              itemSelected: false,
            },
            {
              id: 6,
              name: 'Information B',
              itemSelected: false,
            },
            {
              id: 7,
              name: 'Information C',
              itemSelected: false,
            },
            {
              id: 8,
              name: 'Information D',
              itemSelected: false,
            },
          ],
        },
        {
          groupid: 3,
          searchString: '',
          groupname: 'Pain Depth',
          groupitems: [
            {
              id: 9,
              name: 'Information A',
              itemSelected: false,
            },
            {
              id: 10,
              name: 'Information B',
              itemSelected: false,
            },
            {
              id: 11,
              name: 'Information C',
              itemSelected: false,
            },
            {
              id: 12,
              name: 'Information D',
              itemSelected: false,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Treatment',
      options: [
        {
          groupid: 1,
          groupname: 'Physiotherapy Taping',
          groupitems: [
            {
              id: 1,
              name: 'Strapping',
              itemSelected: false,
            },
            {
              id: 2,
              name: 'Taping',
              itemSelected: false,
            },
            {
              id: 3,
              name: 'Kinesiology taping',
              itemSelected: false,
            },
          ],
        },
        {
          groupid: 2,
          groupname: 'Dry Needling',
          groupitems: [
            {
              id: 1,
              name: 'Pilates',
              itemSelected: false,
            },
            {
              id: 2,
              name: 'yoga',
              itemSelected: false,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Home Exercise Program',
      options: [
        {
          groupid: 1,
          groupname: 'Physiotherapy Taping',
          groupitems: [
            {
              id: 1,
              name: 'Strapping',
              itemSelected: false,
            },
            {
              id: 2,
              name: 'Taping',
              itemSelected: false,
            },
            {
              id: 3,
              name: 'Kinesiology taping',
              itemSelected: false,
            },
          ],
        },
        {
          groupid: 2,
          groupname: 'Dry Needling',
          groupitems: [
            {
              id: 1,
              name: 'Pilates',
              itemSelected: false,
            },
            {
              id: 2,
              name: 'yoga',
              itemSelected: false,
            },
          ],
        },
      ],
    },
  ],
  pacients: [
    {
      id: 0,
    },
    {
      id: 1,
      name: 'John Doe',
      username: 'JonnyDoe',
      email: 'johndoe@email.com',
      age: 23,
      occupation: 'Professional football player',
      gender: 'male',
      diagnostics: [
        {
          id: 1,
          date: '2019/03/24',
        },
        {
          id: 2,
          date: '2019/05/02',
        },
        {
          id: 3,
          date: '2019/02/01',
        },
      ],
    },
    {
      id: 2,
      name: 'William',
      username: 'williamlili',
      email: 'william@email.com',
      age: 46,
      occupation: 'Programmer',
      gender: 'female',
      diagnostics: [
        {
          id: 1,
          date: '2019/03/24',
        },
      ],
    },
    {
      id: 3,
      name: 'Kali',
      username: 'Kali',
      email: 'kali@email.com',
      age: 67,
      occupation: 'Internal Auditor',
      gender: 'male',
      diagnostics: [
        {
          id: 1,
          date: '2019/03/24',
        },
        {
          id: 2,
          date: '2019/05/02',
        },
      ],
    },
    {
      id: 4,
      name: 'Ma',
      username: 'mawanda',
      email: 'mawanda@email.com',
      age: 35,
      occupation: '3D Visionary',
      gender: 'male',
      diagnostics: [],
    },
    {
      id: 5,
      name: 'Mary Ma',
      username: 'maryma',
      email: 'maryma@email.com',
      age: 57,
      occupation: 'UX Lead',
      gender: 'female',
      diagnostics: [
        {
          id: 1,
          date: '2019/03/24',
        },
        {
          id: 2,
          date: '2019/05/02',
        },
        {
          id: 3,
          date: '2019/02/01',
        },
      ],
    },
  ],
  treatments: [
    {
      groupid: 1,
      groupname: 'Physiotherapy Taping',
      groupitems: [
        {
          id: 1,
          name: 'Strapping',
          itemSelected: false,
        },
        {
          id: 2,
          name: 'Taping',
          itemSelected: false,
        },
        {
          id: 3,
          name: 'Kinesiology taping',
          itemSelected: false,
        },
      ],
    },
    {
      groupid: 2,
      groupname: 'Acupuncture and Dry Needling',
      groupitems: [
        {
          id: 1,
          name: 'Pilates',
          itemSelected: false,
        },
        {
          id: 2,
          name: 'yoga',
          itemSelected: false,
        },
      ],
    },
  ],
  diseases: [
    {
      id: 1,
      name: 'Disease 1',
      diseaseSelected: false,
      previousAccuracySelected: '',
    },
    {
      id: 2,
      name: 'Disease 2',
      diseaseSelected: false,
      previousAccuracySelected: '',
    },
    {
      id: 3,
      name: 'Disease 3',
      diseaseSelected: false,
      previousAccuracySelected: '',
    },
    {
      id: 4,
      name: 'Disease 4',
      diseaseSelected: false,
      previousAccuracySelected: '',
    },
    {
      id: 5,
      name: 'Disease 5',
      diseaseSelected: false,
      previousAccuracySelected: '',
    },
    {
      id: 6,
      name: 'Disease 6',
      diseaseSelected: false,
      previousAccuracySelected: '',
    },
    {
      id: 7,
      name: 'Disease 7',
      diseaseSelected: false,
      previousAccuracySelected: '',
    },
    {
      id: 8,
      name: 'Disease 8',
      diseaseSelected: false,
      previousAccuracySelected: '',
    },
    {
      id: 9,
      name: 'Disease 9',
      diseaseSelected: false,
      previousAccuracySelected: '',
    },
    {
      id: 10,
      name: 'Disease 10',
      diseaseSelected: false,
      previousAccuracySelected: '',
    },
    {
      id: 11,
      name: 'Disease 11',
      diseaseSelected: false,
      previousAccuracySelected: '',
    },
  ],
  subjectiveassessments: [
    {
      groupid: 1,
      searchString: '',
      groupname: 'Red Flag',
      groupitems: [
        {
          id: 1,
          name: 'Information A',
          itemSelected: false,
        },
        {
          id: 20,
          name: 'Information B',
          itemSelected: false,
        },
        {
          id: 3,
          name: 'Information C',
          itemSelected: false,
        },
        {
          id: 4,
          name: 'Information D',
          itemSelected: false,
        },
      ],
    },
    {
      groupid: 2,
      searchString: '',
      groupname: 'Symptom Describe',
      groupitems: [
        {
          id: 5,
          name: 'Information A',
          itemSelected: false,
        },
        {
          id: 6,
          name: 'Information B',
          itemSelected: false,
        },
        {
          id: 7,
          name: 'Information C',
          itemSelected: false,
        },
        {
          id: 8,
          name: 'Information D',
          itemSelected: false,
        },
      ],
    },
    {
      groupid: 3,
      searchString: '',
      groupname: 'Pain Depth',
      groupitems: [
        {
          id: 9,
          name: 'Information A',
          itemSelected: false,
        },
        {
          id: 10,
          name: 'Information B',
          itemSelected: false,
        },
        {
          id: 11,
          name: 'Information C',
          itemSelected: false,
        },
        {
          id: 12,
          name: 'Information D',
          itemSelected: false,
        },
      ],
    },
  ],
  objectiveassessments: [
    {
      groupid: 1,
      searchString: '',
      groupname: 'Red Flag',
      groupitems: [
        {
          id: 1,
          name: 'Information A',
          itemSelected: false,
        },
        {
          id: 20,
          name: 'Information B',
          itemSelected: false,
        },
        {
          id: 3,
          name: 'Information C',
          itemSelected: false,
        },
        {
          id: 4,
          name: 'Information D',
          itemSelected: false,
        },
      ],
    },
    {
      groupid: 2,
      searchString: '',
      groupname: 'Symptom Describe',
      groupitems: [
        {
          id: 5,
          name: 'Information A',
          itemSelected: false,
        },
        {
          id: 6,
          name: 'Information B',
          itemSelected: false,
        },
        {
          id: 7,
          name: 'Information C',
          itemSelected: false,
        },
        {
          id: 8,
          name: 'Information D',
          itemSelected: false,
        },
      ],
    },
    {
      groupid: 3,
      searchString: '',
      groupname: 'Pain Depth',
      groupitems: [
        {
          id: 9,
          name: 'Information A',
          itemSelected: false,
        },
        {
          id: 10,
          name: 'Information B',
          itemSelected: false,
        },
        {
          id: 11,
          name: 'Information C',
          itemSelected: false,
        },
        {
          id: 12,
          name: 'Information D',
          itemSelected: false,
        },
      ],
    },
  ],
  diagnostics: [
    {
      id: 1,
      date: '2019/03/24',
    },
    {
      id: 2,
      date: '2019/05/02',
    },
    {
      id: 3,
      date: '2019/02/01',
    },
  ],
};

export default initialData;
