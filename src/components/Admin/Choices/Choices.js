import { useMutation, useQuery } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { PlayCircle, Trash2 } from 'react-feather';
import { useHistory } from 'react-router-dom';

import CrudList from '../CrudList/CrudList';
import { ADD_CHOICE, CHOICE_QUERY, DELETE_CHOICE } from './Choices.actions';

const Choices = (props) => {
  const [input, setInput] = useState('');

  const history = useHistory();
  const { loading, error, data, refetch } = useQuery(CHOICE_QUERY, {
    variables: {
      questionId: props.questionId,
    },
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteChoiceMutation] = useMutation(DELETE_CHOICE, {
    onCompleted() {
      refetch();
    },
  });

  const [addChoiceMutation] = useMutation(ADD_CHOICE, {
    onCompleted() {
      refetch();
    },
  });

  const addChoice = () => {
    setDialogOpen(false);
    addChoiceMutation({
      variables: { title: input, questionId: props.questionId },
    });
    setInput('');
  };

  const deleteQuestion = (choices, choiceId) => {
    data.choices.filter((g) => g.id !== choiceId);

    deleteChoiceMutation({
      variables: { choiceId },
    });
  };

  if (loading) return <div>Chargement des réponses possibles...</div>;
  if (error) return <div>Erreur lors du chargement des réponses, veuillez réessayer.</div>;

  const choicesToRender = data.choices;
  const dataTable = {
    columns: [
      { title: 'Titre', slug: 'title' },
      {
        title: '',
        slug: 'actions',
        align: 'right',
        content: (question) => (
          <>
            <IconButton size="small" onClick={() => deleteQuestion(choicesToRender, question.id)}>
              <Trash2 size="16" />
            </IconButton>
            <IconButton size="small">
              <PlayCircle size="16" />
            </IconButton>
          </>
        ),
      },
    ],
    data: choicesToRender,
    title: 'Liste des réponses',
    actions: (
      <Button size="small" onClick={() => setDialogOpen(true)} variant="contained" color="primary">
        Ajouter une réponse
      </Button>
    ),
  };

  const dataDialog = {
    title: 'Ajouter une réponse',
    description: 'Quelle réponse voulez-vous ajouter ?',
    open: dialogOpen,
    closeDialog: setDialogOpen,
    completeDialog: addChoice,
    fields: [
      <TextField
        key="name"
        onChange={(e) => setInput(e.target.value)}
        autoFocus
        margin="dense"
        id="name"
        label="Question"
        fullWidth
        variant="outlined"
      />,
    ],
  };

  return (
    <>
      <CrudList table={dataTable} dialog={dataDialog} />
    </>
  );
};

export default Choices;
