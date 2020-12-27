import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const UPDATE_REPOSITORY = gql`
  mutation updateRepo($input: UpdateRepositoryInput!) {
    updateRepository(input: $input) {
      repository {
        id
        name
        description
      }
    }
  }
`;

const Edit = (props) => {
  const [inputChange, setInputChange] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const [updateRepo, { data }] = useMutation(UPDATE_REPOSITORY);

  const OnEditSave = () => {
    if (!inputChange) return;
    if (props.changeTitle === 'name') {
      setBtnDisabled(true);
      updateRepo({
        variables: {
          input: {
            repositoryId: props.repoId,
            name: inputChange,
          },
        },
      }).then((res) => {
        // setIsSaved(true);
        setBtnDisabled(false);
      });
    } else if (props.changeTitle === 'description') {
      setBtnDisabled(true);
      updateRepo({
        variables: {
          input: {
            repositoryId: props.repoId,
            description: inputChange,
          },
        },
      }).then((res) => {
        // setIsSaved(true);
        setBtnDisabled(false);
      });
    }
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Change repository {props.changeTitle}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-2">
                <small className="text-warning">
                  <span>
                    {props.changeTitle.charAt(0).toUpperCase() +
                      props.changeTitle.slice(1)}
                  </span>{' '}
                  will be changed in Github, please confirm before any changes
                </small>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter new repository name"
                onInput={(e) => setInputChange(e.target.value)}
              />
            </div>
            <div className="d-flex mb-3 justify-content-end">
              <button
                type="button"
                className="btn btn-secondary btn-sm mr-3"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm mr-3"
                onClick={OnEditSave}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
